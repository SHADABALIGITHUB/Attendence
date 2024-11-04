import React, { useEffect } from "react";
import FetchInstance from "../fetchInstance/Fetch";
import { useNavigate } from "react-router-dom";
interface AuthContextType {
  authStatus: boolean;
  setAuthStatus: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ContributionType {
  [date: string]: number; // Each date is a key with a numeric value
}
interface UserData {
  _id: string;
  email: string;
  username: string;
  password: string;
  verifiedStatus: boolean;
  __v: number;
  currentStreak: [number, Date];
  longestStreak: number;

  defaultSheetProgress: {
    [sheetId: string]: {
      progress: number;
      lastUpdated: Date;
      _id: string;
    };
  };
  userType: "admin" | "user";
  contributions: ContributionType[];
  dateOfAccountCreation:string
}

export const AuthStatus = React.createContext<AuthContextType>({
  authStatus: false,
  setAuthStatus: () => {},
  userData: null,
  setUserData: () => {},
  loading: false,
  setLoading: () => {},
});

const AuthStatusProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authStatus, setAuthStatus] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<UserData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const navigate = useNavigate();

  const UserDataApiCall = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthStatus(true); // Set authStatus to true if token exists
    } else {
      setAuthStatus(false); // Set authStatus to false if no token
    }

    try {
      if (token && !userData) {
        setLoading(true);
        const UserInfo = await FetchInstance("/api/user/token-info", {
          method: "POST",
          body: JSON.stringify({ token: token }),
        });

        if (UserInfo) {
          setUserData(UserInfo.user[0]);

          setLoading(false);
        } else {
          localStorage.removeItem("token");
          setLoading(false);
          navigate("/auth");
        }
      } else if (userData && token) {
        setLoading(false);
        return;
      } else {
        setLoading(false);
        setAuthStatus(false); // Set authStatus to false if no token
      }
    } catch (err) {
      console.log(err, "Something Breaks");
      localStorage.removeItem("token");
      setLoading(false);
      navigate("/auth");
    }
  };

  useEffect(() => {
    UserDataApiCall();
  }, []);

  return (
    <AuthStatus.Provider
      value={{
        authStatus,
        setAuthStatus,
        userData,
        setUserData,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthStatus.Provider>
  );
};

export default AuthStatusProvider;

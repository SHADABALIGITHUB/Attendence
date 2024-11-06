import React, { useContext, useEffect, useState } from "react";
import { UserSheetType } from "../Dashboard";
import SheetCardViewInDashboard from "../Sheets/SheetCardViewInDashboard";
import { AuthStatus } from "../../../context/Auth";
import FetchInstance from "../../../fetchInstance/Fetch";
import SmallLoading from "../../Loading/SmallLoading";

const UserSheets: React.FC = () => {
  const { userData } = useContext(AuthStatus);
  const [UserSheetsData, setUserSheetsData] = useState<UserSheetType[] | null>(
    null
  );

  const UserSheetApiCall = async () => {
    try {
      const response = await FetchInstance(
        `/api/sheet/user/${userData?.email}`,
        {
          method: "GET",
        }
      );

      if (response.status) {
        setUserSheetsData(response.data);
      } else {
        console.log("somthing Wrong ");
      }
    } catch (err) {
      console.log("Err 501 server issue", err);
    }
  };

  useEffect(() => {
    UserSheetApiCall();
  }, [UserSheetsData]);

  return (
    <>
      {UserSheetsData ? (
        <SheetCardViewInDashboard
          SheetType="UserSheet"
          UserSheetsData={UserSheetsData}
        />
      ) : (
        <SmallLoading value="Wait a while"/>
      )}
    </>
  );
};

export default UserSheets;

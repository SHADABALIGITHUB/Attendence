import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Layout from "./Layout/Layout";
import Verify from "./components/VerifyPage/Verify";
import CreateSheet from "./components/CreateSheet/CreateSheet";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthStatus } from "./context/Auth";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import TableForAdding from "./components/CreateSheet/TableForAdding";
// import ViewSheet from "./components/Dashboard/Sheets/ViewSheet";
import AdminCreateSheet from "./components/CreateSheet/AdminCreateSheet";
import AuthUser from "./components/LoginRegister/AuthUser";
import SheetCardViewInDashboard from "./components/Sheets/SheetCardContainer";
import UserSheets from "./components/UsersSheets/UserSheets";
import DefaultSheetView from "./components/Sheets/DefaultSheetView";
import UserSheetView from "./components/Sheets/UserSheetView";
import { DefaultSheetDataContext } from "./context/DefaultSheets";
import Loading from "./components/Loading/Loading";
import DashboardContent from "./components/Dashboard/DasboardContent/DashboardContent";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import UserSheetsDataProvider from "./context/UserSheets";

function App() {
  const { authStatus, userData

   } = useContext(AuthStatus);
  const { DefaultSheetData } = useContext(DefaultSheetDataContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              authStatus ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <LandingPage />
              )
            }
          />
          {/* <Route path='/login' element={authStatus?<Navigate to="/dashboard" replace/>:<Login/>}/> */}
          {/* <Route path='/register' element={authStatus?<Navigate to="/dashboard" replace/>:<Register/>}/> */}
          <Route
            path="/auth"
            element={
              authStatus ? <Navigate to="/dashboard" replace /> : <AuthUser />
            }
          />
          <Route 
          path="/forget-password"
          element={

            authStatus ? <Navigate to="/dashboard" replace /> : <ForgetPassword/>

          }
          />
          <Route
            path="/register-verify"
            element={
              authStatus ? <Navigate to="/dashboard" replace /> : <Verify />
            }
          />

          <Route
            path="/"
            element={
              authStatus ? <UserSheetsDataProvider><DashboardLayout /></UserSheetsDataProvider> : <Navigate to="/auth" replace />
            }
          >
            <Route
              path="/dashboard"
              element={
                <Loading>
                  <DashboardContent />
                </Loading>
              }
            />
            <Route path="/create-sheet" element={<CreateSheet />} />
            <Route
              path="/default-sheets"
              element={
                <SheetCardViewInDashboard
                  SheetType="Default"
                  UserSheetsData={DefaultSheetData}
                />
              }
            />
            <Route
              path="/user-sheets"
              element={
                <UserSheets/>
               
              }
            />
            <Route path="/create-sheet-table" element={<TableForAdding />} />
            <Route path="/view-default/:sheetid" element={<DefaultSheetView/>} />
            <Route path="/view-user/:sheetid" element={<UserSheetView/>} />
            <Route
              path="/admin-create-sheet"
              element={
                userData?.email === import.meta.env.VITE_ADMIN_EMAIL ? (
                  <AdminCreateSheet />
                ) : (
                  <CreateSheet />
                )
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<h2>404 Not Found </h2>}></Route>
      </Routes>
    </>
  );
}

export default App;

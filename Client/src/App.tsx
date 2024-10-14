
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import Layout from './Layout/Layout';
import Register from './components/Register/Register';
import Verify from './components/VerifyPage/Verify';
import Dashboard from './components/Dashboard/Dashboard';
import CreateSheet from './components/CreateSheet/CreateSheet';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus } from './context/Auth';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import TableForAdding from './components/CreateSheet/TableForAdding';
import ViewSheet from './components/Dashboard/Sheets/ViewSheet';




function App() {
 

  const {authStatus}=useContext(AuthStatus);
 

  return (
   
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/login' element={authStatus?<Navigate to="/dashboard" replace/>:<Login/>}/>
       <Route path='/register' element={authStatus?<Navigate to="/dashboard" replace/>:<Register/>}/>
       <Route path='/register-verify' element={authStatus?<Navigate to="/dashboard" replace/>:<Verify/>}/>

          <Route path='/' element={authStatus?<DashboardLayout/>:<Navigate to="/login" replace />}>
            
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path='/create-sheet' element={<CreateSheet/>} />
              <Route path="/create-sheet-table" element={<TableForAdding/>} />
              <Route path="/view-sheet" element={<ViewSheet/>}/>
       
          </Route>
       
       
       
      </Route>
   
      <Route path='*' element={<h2> Notfound </h2>}></Route>
     
      


     </Routes>
     </BrowserRouter>
    
    </>
    
    
  )
}
  
export default App

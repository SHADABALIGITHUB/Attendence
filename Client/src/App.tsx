
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import Layout from './Layout/Layout';
import Register from './components/Register/Register';
import Verify from './components/VerifyPage/Verify';


function App() {
 

  return (
   
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/register-verify' element={<Verify/>}/>
      </Route>

     </Routes>
     </BrowserRouter>
    
    </>
    
    
  )
}
  
export default App

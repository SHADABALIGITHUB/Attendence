
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
 

  return (
   
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>

     </Routes>
     </BrowserRouter>
    
    </>
    
    
  )
}
  
export default App

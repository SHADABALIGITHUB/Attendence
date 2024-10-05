
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import Layout from './Layout/Layout';


function App() {
 

  return (
   
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/login' element={<Login/>}/>
      </Route>

     </Routes>
     </BrowserRouter>
    
    </>
    
    
  )
}
  
export default App

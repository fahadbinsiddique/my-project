import { useState } from 'react'
import Home from '../src/PAGES/Home'
import About from './PAGES/About'
import Pricing from './PAGES/Pricing';
import Courses from './PAGES/Courses';
import Contact from './PAGES/Contact';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Common/Layout';
import Login from './PAGES/Login';
import SignUp from './PAGES/SignUp';

function App() {
  
  let domain = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>

    </Route>
  ))
    
  

  return (
    <>

    <RouterProvider router={domain}/>

    </>
  )
}

export default App

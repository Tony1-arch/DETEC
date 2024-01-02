import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Layout from './Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>} />
     
    </Route>
  )
)

function App() {
 
  return (
    <div className="app">
       <RouterProvider router={router}/>
       
      
        
     
      
       
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar';
import React, { Suspense } from 'react';

const About = React.lazy(() => import('./components/About'))
const Home = React.lazy(() => import('./components/Home'))

//Bad way to routing or navigating from one page to another 
//      <div>
//        <button onClick={() => {
//            window.location.href = '/'
//        }}>Landing Page</button>
//        <button onClick={() => {
//            window.location.href = '/about'
//        }}>About Page</button>
//      </div>
function App() {
    //you can't use useNavigate outside the router :( 
//    const navigate = useNavigate();
  return (
    <div>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Navbar />}> 
            <Route path='/' element={
                <Suspense fallback={<div>Loading</div>}>
                    <Home/>
                </Suspense>
            } />
            <Route path='/about' element={
                <Suspense fallback={<div>Loading</div>}>
                    <About />
                </Suspense>
            } />
        </Route>
        </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App

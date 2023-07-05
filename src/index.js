import './styles.css'
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Experience } from './Experience';
import LoginPage from './Views/Login';
import { Canvas } from '@react-three/fiber';
import Micursor from './Micursor';
import { StrictMode, Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDom.createRoot(document.querySelector('#root'))

const Exp = () => {
    return(
        <>
            
            <Canvas>
                <Suspense fallback={null}>
                   <Experience />
                </Suspense>
            </Canvas>
            <Analytics />
            <Micursor/>
            {/* <Loader/> */}


    </>
    )
}


root.render(

    <BrowserRouter>
    <StrictMode>
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<Exp />} />
        </Routes>
        </StrictMode>
    </BrowserRouter>

)

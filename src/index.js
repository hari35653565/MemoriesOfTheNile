import './styles.css'
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Experience } from './Experience';
import LoginPage from './Views/Login';
import Registro from './Views/Registro';
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
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<Registro />} />
            <Route path='/experience' element={<Exp />} />
        </Routes>
        </StrictMode>
    </BrowserRouter>

)

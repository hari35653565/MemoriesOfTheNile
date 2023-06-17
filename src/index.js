import './styles.css'
import ReactDom from "react-dom";
import { Experience } from './Experience';
import { Canvas } from '@react-three/fiber';
import Micursor from './Micursor';
import { StrictMode, Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDom.createRoot(document.querySelector('#root'))


root.render(
    <>
        <StrictMode>
            
            <Canvas>
                <Suspense fallback={null}>
                   <Experience />
                </Suspense>
            </Canvas>
            <Analytics />
            <Micursor/>
            {/* <Loader/> */}
        </StrictMode>


    </>


)

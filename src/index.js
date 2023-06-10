import './styles.css'
import ReactDom from "react-dom";
import { Experience } from './Experience';
import { Canvas } from '@react-three/fiber';
import Cursor from './Cursor.js';
import { StrictMode, Suspense } from 'react';
import { Loader } from '@react-three/drei';

const root = ReactDom.createRoot(document.querySelector('#root'))


root.render(
    <>
        <StrictMode>
            
            <Canvas>
                <Suspense fallback={null}>
                   <Experience />
                </Suspense>
            </Canvas>
            <Cursor />
            <Loader/>
        </StrictMode>


    </>


)

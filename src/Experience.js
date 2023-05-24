 /**
  * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
  * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
  * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
  * React three drei: https://github.com/pmndrs/drei
  * Three.js: https://threejs.org/docs/
  * 
*/
import React from "react";
import { Center, OrbitControls, PointerLockControls, PresentationControls, Text, Float } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import { useRef, useState, useEffect } from "react";
import { Perf } from 'r3f-perf'
import Intro from "./Intro";
import Menu from "./Menu";

export function Experience(){

    const [menuVisible, setMenuVisible] = useState(false);
    const orbitControlsRef = useRef();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                event.preventDefault();
                setMenuVisible((prevMenuVisible) => !prevMenuVisible);
                orbitControlsRef.current.enabled = !menuVisible;
            }
            };
        
            document.addEventListener('keydown', handleKeyDown);
        
            return () => {
            document.removeEventListener('keydown', handleKeyDown);
            };
        }, [menuVisible]);
        
    return <>
    <OrbitControls makeDefault ref={orbitControlsRef} />

    <directionalLight position={[1, 2, 3]} intensity={1.5} />
    <ambientLight intensity={0.5} />
    
    <Intro  />

    <Float speed={5} >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={1}
                color="#964B00"
                position-y={1.6}
                maxWidth={8}
                textAlign="center"
            >
                Memories of the Nile
            </Text>
        </Float>
    {menuVisible && <Menu onClose={() => setMenuVisible(false)} />}
    </>
}
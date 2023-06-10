/**
 * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
 * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
 * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
 * React three drei: https://github.com/pmndrs/drei
 * Three.js: https://threejs.org/docs/
 * 
*/
import React from "react";
import { OrbitControls, Text, Float, useHelper  } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react";
import { SpotLightHelper } from 'three';
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import Intro from "./Intro";
import Menu from "./Menu";
import Skybox from "./Skybox";
import Guia from "./Guia";
import Lobby from "./Lobby";
import Tree from "./Plantas/Tree"
import Palm from "./Plantas/Palm" 
import Bush from "./Plantas/Bush";


export function Experience() {

    const [menuVisible, setMenuVisible] = useState(false);
    const controlsRef = useRef();
    const { camera, gl } = useThree();
    const cameraRef = useRef(camera);
    const previousMouse = useRef([0, 0]);

    const spotLightRef = useRef()
    useHelper( spotLightRef, SpotLightHelper, 1, 'red')
   
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                event.preventDefault();
                setMenuVisible((prevMenuVisible) => !prevMenuVisible);
                //orbitControlsRef.current.enabled = !menuVisible;
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [menuVisible]);

    const changeCameraPosition = (iconIndex) => {
        // Placeholder positions for camera position based on the clicked icon
        const positions = [
            [5, 0, 0],   // Icon 1 position
            [0, 10, 0],  // Icon 2 position
            [0, 0, 5],   // Icon 3 position
            [-5, 0, 0],  // Icon 4 position
        ];

        const position = positions[iconIndex];
        cameraRef.current.position.set(position[0], position[1], position[2]);
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const [prevX, prevY] = previousMouse.current;
        const movementX = clientX - prevX;
        const movementY = clientY - prevY;
    
        if (movementX !== 0 || movementY !== 0) {
          controlsRef.current.rotateSpeed = 1;
          controlsRef.current.update();
          controlsRef.current.rotateSpeed = 0.5;
        }
    
        previousMouse.current = [clientX, clientY];
      };
    
      useFrame(() => {
        controlsRef.current.update();
      });

    return <>
        <OrbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            enableRotate // Enable rotation
            enableZoom={false} // Disable zooming
        />
       <spotLight castShadow ref={ spotLightRef} position={[0, 20, 15]} intensity={2} />
   
        <ambientLight intensity={0.5} />

        <Skybox castShadow = {true}
            receiveShadow={true} />
        <Intro />
        <Guia/>
        <Lobby/>
       
        <Palm scale={ 0.050} position={[-0.7, -1.2, 2.3]}/>
        <Palm scale={ 0.050} position={[0.4, -1.2, 2.3]}/>
        <Tree scale={ 0.18} position={[-1.8, -1.3, 2.5]}/> 
       
        <Float speed={5} >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={1}
                color="#964B00"
                position-y={4}
                maxWidth={8}
                textAlign="center"
            >
                Memories of the Nile
            </Text>
        </Float>
        {menuVisible && <Menu onClose={() => setMenuVisible(false)} changeCameraPosition={changeCameraPosition} />}
    </>
}
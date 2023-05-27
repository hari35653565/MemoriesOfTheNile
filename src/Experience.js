/**
 * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
 * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
 * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
 * React three drei: https://github.com/pmndrs/drei
 * Three.js: https://threejs.org/docs/
 * 
*/
import React from "react";
import { OrbitControls, Html, Text, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react";
import Intro from "./Intro";
import Menu from "./Menu";
import Skybox from "./Skybox";
import Lobby from "./Lobby";
import Architecture from "./Architecture";
import Templo2 from "./Templo2";

export function Experience() {

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

    const { camera } = useThree();
    const cameraRef = useRef(camera);

    return <>
        <OrbitControls makeDefault ref={orbitControlsRef} />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Skybox />
        <Intro />
        <Lobby />
        <Architecture />
        <Templo2 />


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


        <Float speed={3} >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.6}
                color="white"
                position-x={-18}
                position-z={-2}
                position-y={4}
                maxWidth={8}
                textAlign="center"
            >
                Una puerta de acceso a los dioses
            </Text>
        </Float>

        {menuVisible && <Menu onClose={() => setMenuVisible(false)} changeCameraPosition={changeCameraPosition} />}
    </>
}
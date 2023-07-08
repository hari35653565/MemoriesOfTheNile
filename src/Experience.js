/*
 * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
 * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
 * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
 * React three drei: https://github.com/pmndrs/drei
 * Three.js: https://threejs.org/docs/
 *
 *
*/
import React from "react";
import { OrbitControls, Text, Float, PointerLockControls, useHelper } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react";
import { SpotLightHelper } from 'three';
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import Intro from "./Intro";
import Menu from "./Menu";
import Skybox from "./Skybox";
import Guia from "./Guia";
import Lobby from "./Lobby";

import Architecture from "./Architecture";
import Templo2 from "./Templo2";
import Tree from "./Plantas/Tree"
import Palm from "./Plantas/Palm"
import Bush from "./Plantas/Bush";

import Ankh from "./Religion/Ankh";
import Bastet from "./Religion/Bastet";
import Ra from "./Religion/Ra";
import Anubis from "./Religion/Anubis";
import Osiris from "./Religion/Osiris";
import UMC from "./Religion/UMC";
import Horus from "./Religion/Horus";
import Isis from "./Religion/Isis";

import Croc from "./Animales/Croc";
import Gato from "./Animales/Gato";
import Ibis from "./Animales/Ibis";
import Scarab from "./Animales/Scarab";
import Ramses from "./Ramses";
import { PlaneGeometry } from "three";
import * as THREE from 'three'
import { useLoader } from "@react-three/fiber";
import VideoDioses from "./VideoDioses";
import VideoEgipto from "./VideoEgipto";


export function Experience() {

    const [menuVisible, setMenuVisible] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const controlsRef = useRef();
    const { camera, gl } = useThree();
    const cameraRef = useRef(camera);
    const previousMouse = useRef([0, 0]);


    /*const spotLightRef = useRef()
    useHelper( spotLightRef, SpotLightHelper, 1, 'red')*/
    const texturaSoc = useLoader(THREE.TextureLoader, `${process.env.PUBLIC_URL}/static/assets/sociedad.jpg`);
    texturaSoc.wrapS = THREE.RepeatWrapping
    texturaSoc.wrapT = THREE.RepeatWrapping
    texturaSoc.repeat.x = -1
    texturaSoc.offset.x = 1

    useEffect(() => {
        const handleKeyDown = (event) => {

            switch (event.code) {
                case 'Space':
                    event.preventDefault();
                    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
                    //orbitControlsRef.current.enabled = !menuVisible;
                    break;

                case 'ArrowRight':
                    var currentPosition = cameraRef.current.position.toArray().join(',');
                    switch (currentPosition) {
                        case '0,0,5': //posicion piramide y esfinge
                            cameraRef.current.position.set(8, 0, 5); //posicion lobby
                            break
                        case '8,0,5'://posicion lobby
                            cameraRef.current.position.set(15, 0, 5); //ramses
                            break
                        case '-18,0,5': //posicon arquitectura
                            cameraRef.current.position.set(0, 0, 5); //posicion piramide y esfinge
                            break
                        case '-40,1,5': //Posicion templo2
                            cameraRef.current.position.set(-18, 0, 5); //posicion arquitectura
                            break
                    }

                    break;

                case 'ArrowLeft':
                    var currentPosition = cameraRef.current.position.toArray().join(',');
                    switch (currentPosition) {
                        case '8,0,5'://posicion lobby
                            cameraRef.current.position.set(0, 0, 5); //posicion piramide y esfinge
                            break
                        case '0,0,5': //posicion piramide y esfinge
                            cameraRef.current.position.set(-18, 0, 5); //posicion arquitectura
                            break
                        case '-18,0,5': //posicion arquitectura
                            cameraRef.current.position.set(-40, 1, 5);  //Posicion templo2
                            break
                        case '15,0,5': //posicion ramses
                            cameraRef.current.position.set(8, 0, 5);// posicion lobby
                            break
                    }
                    break;

            }
        };

        const handleKeyDownWrapper = (event) => {
            handleKeyDown(event);
        };


        document.addEventListener('keydown', handleKeyDownWrapper);

        return () => {
            document.removeEventListener('keydown', handleKeyDownWrapper);
        };
    }, [menuVisible]);

    useFrame(() => {
        var currentPosition = camera.position.toArray().join(',');
        if (currentPosition === '8,-0.7,1') {
            setShowButton(false)
        } else {
            setShowButton(true)
        }
    })


    const changeCameraPosition = (iconIndex) => {
        const positions = [
            [0, 0, 5],   // Historia
            [-18, 0, 5],  // Arquitectura
            [-40, 1, 5],   // Naturaleza
            [-18, 0, 5],  // Cultura
            [8, 0, 5] //Lobby
        ];

        const position = positions[iconIndex];
        cameraRef.current.position.set(position[0], position[1], position[2]);
    };

    return <>

        {<PointerLockControls makeDefault/> }


    {/*<OrbitControls makeDefault />*/}




        {/*<spotLight castShadow  position={[0, 20, 15]} intensity={2} />*/}

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Skybox castShadow={true}
            receiveShadow={true} />
        <Intro />
        <Guia />
        <Lobby />

        <Palm scale={0.14} position={[-37.9, -1.3, -5.8]} />
        <Palm scale={0.14} position={[-37.9, -1.3, -7.8]} />
        <Tree scale={0.6} position={[-42, -1.3, -6.5]} />

        <Lobby />
        <Architecture />
        <mesh position={[-25, -0.5, -8]} scale={1} rotation={[0, Math.PI / 2, 0]} onClick={(e) => {
            e.stopPropagation()
        }}>
            <planeGeometry args={[50, 50]} />
            <meshBasicMaterial transparent opacity={0} />
        </mesh>
        <Ramses />
        <Templo2 />

        <mesh position={[-15.6, -0.38, -1.2]} >
            <VideoDioses />
        </mesh>
        <mesh position={[-20.23, -0.38, -1.2]} >
            <VideoEgipto />
        </mesh>

        {/*Animales*/}
        <Croc />
        <Gato />
        <Ibis />
        <Scarab />

        {/*Religion*/}
        <Ankh />
        <Bastet />
        <Ra />
        <Anubis />
        <Osiris />
        <Horus />
        <Isis />
        <UMC />

        <Ramses />
        <Guia showButton={showButton} />
        <mesh position={[-18, -0.5, -8.8]} scale={1} rotation={[0, Math.PI, 0]}>
            <planeGeometry attach="geometry" />
            <meshStandardMaterial attach="material" map={texturaSoc} side={THREE.DoubleSide} />
        </mesh>

        <Float speed={5} >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={1}
                color="#964B00"
                position-y={2}
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
                color="black"
                position-x={-18}
                position-z={-2}
                position-y={3}
                maxWidth={8}
                textAlign="center"
            >
                Una puerta de acceso a los dioses
            </Text>
        </Float>

        <Float speed={3} >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.4}
                color="black"
                position-x={15}
                position-z={-0.5}
                position-y={2}
                maxWidth={8}
                textAlign="center"
            >
                Soy Ramses
            </Text>
        </Float>

        {menuVisible && <Menu onClose={() => setMenuVisible(false)} changeCameraPosition={changeCameraPosition} />}
    </>
}

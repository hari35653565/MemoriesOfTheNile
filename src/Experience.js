/**
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
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import Intro from "./Intro";
import Menu from "./Menu";
import Skybox from "./Skybox";
import Guia from "./Guia";
import Lobby from "./Lobby";
import Architecture from "./Architecture";
import Templo2 from "./Templo2";

import Croc from "./Animales/Croc";
import Gato from "./Animales/Gato";
import Ibis from "./Animales/Ibis";
import Scarab from "./Animales/Scarab";
import Ramses from "./Ramses";
import { PlaneGeometry } from "three";
import * as THREE from 'three'
import { useLoader } from "@react-three/fiber";

export function Experience() {

    const [menuVisible, setMenuVisible] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const controlsRef = useRef();
    const { camera, gl } = useThree();
    const cameraRef = useRef(camera);
    const previousMouse = useRef([0, 0]);

    const texturaSoc = useLoader(THREE.TextureLoader, `${process.env.PUBLIC_URL}/static/assets/sociedad.jpg`);
    texturaSoc.wrapS = THREE.RepeatWrapping
    texturaSoc.wrapT = THREE.RepeatWrapping
    texturaSoc.repeat.x = -1
    texturaSoc.offset.x = 1

    useEffect(() => {
        const handleKeyDown = (event) => {
            // if (event.code === 'Space') {
            //     event.preventDefault();
            //     setMenuVisible((prevMenuVisible) => !prevMenuVisible);
            //     //orbitControlsRef.current.enabled = !menuVisible;
            // }

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
                            //rio nilo
                            break
                        case '-18,0,5': //posicon arquitectura
                            cameraRef.current.position.set(0, 0, 5); //posicion piramide y esfinge
                            break
                        case '-40,1,5': //Posicion templo2
                            cameraRef.current.position.set(-18, 0, 5); //posicion arquitectura
                            break
                        case '-40,1,12'://posicion ramses
                            cameraRef.current.position.set(-40, 1, 5); //posicion templo2
                            cameraRef.current.rotation.y = Math.PI*2;

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
                        case '-40,1,5'://posicion templo2
                            cameraRef.current.position.set(-40, 1, 12); //posicion Ramses
                            cameraRef.current.rotation.y = Math.PI / 2;
                            break                            

                    }
                    break;

            }
        };


        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [menuVisible]);

    useFrame(()=>{
        var currentPosition = camera.position.toArray().join(',');
        if (currentPosition === '8,-0.7,1') {
          setShowButton(false)
        }else{
            setShowButton(true)
        }
    })


    const changeCameraPosition = (iconIndex) => {
        const positions = [
            [0, 0, 5],   // Historia
            [10, -0.5, -3],  // Arquitectura
            [-40, -1, -6],   // Naturaleza
            [10, -0.5, -3],  // Cultura
            [9, -0.5, 0.03] //Lobby
        ];

        const position = positions[iconIndex];
        cameraRef.current.position.set(position[0], position[1], position[2]);
    };
/*
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
      });*/

    return <>
        {/* <OrbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            enableRotate // Enable rotation

        /> */}

        <PointerLockControls
            makeDefault
        />


        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Skybox />
        <Intro />
        <Lobby />
        <Architecture />
        <Ramses />
        <Templo2 />
        
        {/*Animales*/}
        <Croc />
        <Gato />
        <Ibis />
        <Scarab />

        <Ramses/>
        <Guia showButton={showButton}/>
        <mesh position={[-10, -0.5, -2]} scale={0.05} >
            <planeGeometry attach="geometry"  />
            <meshStandardMaterial attach="material" map={texturaSoc} side={THREE.DoubleSide}/>
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

        {menuVisible && <Menu onClose={() => setMenuVisible(false)} changeCameraPosition={changeCameraPosition} />}
    </>
}

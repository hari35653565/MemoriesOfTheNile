import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from './PopupWindow';
import RamsesVideoBox from './RamsesVideoBox';


export default function Ramses() {

    // Modelo de Ramsés
    const nodes = useGLTF('./static/statue_of_ramesses_iii.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [ramsesText, setRamsesText] = useState(false);
    const [ramsesInfo, setRamsesInfo] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const faraon = "RAMSÉS";
    const obj2 = ""

    const handleClick = () => {
        setShowVideo(true);
        //setShowInfo(true);
    };

    const closeVideo = () => {
        setShowVideo(false);
        //setShowInfo(false);
    };


    /* Evento al hacer click derecho a Estatua e ir a esta */
    // const event = (e) => {
    //     // cameraRef.current.position.set(-55, 0.2, -22);
    //     setRamsesText(true);

    //     setTimeout(() => {
    //         setRamsesText(false);
    //     }, 1000);
    // };

    /*Evento al hacer click sobre el jeroglíficos*/

    const eventStatue = (e) => {
        e.stopPropagation = true;
        setRamsesInfo(true);

    }

    /* Evento para cerrar el informativo */
    const closePopup1 = () => {
        setRamsesInfo(false);
    };

    const handleExitClick = () => {
        setShowVideo(false);
    };


    return (
        <group>

            {/* Estructura del templo y sus coordenadas */}
            <group name={"Ramses"} onContextMenu={event} onClick={handleClick}>


                {/* Botón "Salir" */}
                {showVideo && (
                    <Html position={[nodes.scene.position.x, nodes.scene.position.y + 2, nodes.scene.position.z]}>
                        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
                            <button onClick={handleExitClick}>Salir de Ramses</button>
                        </div>
                    </Html>
                )}

                <primitive
                    object={nodes.scene}
                    position={[15, -0.5, -3]}
                    // rotation={[0, Math.PI / 2, 0]}
                    scale={0.3}
                //onClick={handleClick}

                />



                {/* Texto indica Estatua Ramses
                {ramsesText && (
                    <Text position={[-20, -2, 0.5]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
                        Este es Ramsés
                    </Text>
                )} */}


                {/* Renderizar */}
                {showVideo && (
                    <RamsesVideoBox onClick={closeVideo} position={[-20, -2, 0.5]} rotation={[0, Math.PI / 2, 0]}>
                        {/* Contenido del cuadro de video */}
                        {/* reproductor de video de YouTube */}
                    </RamsesVideoBox>
                )}
            </group>

        </group>
    );
}
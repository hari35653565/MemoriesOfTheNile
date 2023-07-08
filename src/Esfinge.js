import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import Esfinge from 'Esfinge.js'

export default function Esfinge() {

    // Modelo del templo Lúxor
    const nodes = useGLTF('./static/statue_of_ramesses_iii.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [ramsesText, setRamsesText] = useState(false);
    const [ramsesInfo, setRamsesInfo] = useState(false);
    const  faraon = "RAMSÉS";
    const obj2 = ""

    /* Evento al hacer click derecho a Estatua e ir a esta */
    const event = (e) => {
        cameraRef.current.position.set(-55, 0.2, -22);
        setRamsesText(true);

        setTimeout(() => {
            setRamsesText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el jeroglíficos*/

    const eventStatue = (e) => {
        e.stopPropagation = true;
        setRamsesInfo(true);

    }

    /* Evento para cerrar el informativo */
    const closePopup1 = () => {
        setRamsesInfo(false);
    };


    return (
        <group>

            {/* Estructura del templo y sus coordenadas */}
            <group name={"Ramses"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-60, 0.4, 18]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.8}

                />

                {/* Texto indica Estatua Ramses*/}
                {ramsesText && (
                    <Text position={[-20, -2, 0.5]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
                       Este es Ramsés
                    </Text>
                )}
            </group>

        </group>
    );
}

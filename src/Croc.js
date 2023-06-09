import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from './PopupWindow';

export default function Croc() {

    // Modelo del templo Lúxor
    const nodes = useGLTF('./static/animales/nile_crocodile_swimming.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [crocText, setCrocText] = useState(false);
    const [ramsesInfo, setRamsesInfo] = useState(false);
    const obj2 = ""

    /* Evento al hacer click derecho a Estatua e ir a esta */
    const event = (e) => {
        cameraRef.current.position.set(-45, 0.2, -22);
        setCrocText(true);

        setTimeout(() => {
            setCrocText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el jeroglíficos*/

    const eventStatue = (e) => {
        e.stopPropagation = true;
        setCrocInfo(true);

    }

    /* Evento para cerrar el informativo */
    const closePopup1 = () => {
        setCrocInfo(false);
    };


    return (
        <group>

            {/* Estructura del templo y sus coordenadas */}
            <group name={"Cocodrilo"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-50, 0.4, 18]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.8}

                />

                {/* Texto indica Cocodrilo*/}
                {crocText && (
                    <Text position={[-20, -2, 0.5]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
                       Este es un Cocodrilo del Nilo
                    </Text>
                )}
            </group>

        </group>
    );
}
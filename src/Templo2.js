import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from './PopupWindow';

export default function Templo2() {

    // Modelo del templo Lúxor
    const nodes = useGLTF('./static/1Palacio-egipcio.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [palacioText, setPalacioText] = useState(false);
    const [palacioInfo, setPalacioInfo] = useState(false);
    const jeroglíficos = "PALACIO FARAON";
    const obj2 = ""

    /* Evento al hacer click derecho palacio e ir a este */
    const event = (e) => {
        cameraRef.current.position.set(-40, 0, -9);
        setPalacioText(true);

        setTimeout(() => {
            setPalacioText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el jeroglíficos*/

    const eventStatue = (e) => {
        e.stopPropagation = true;
        setPalacioInfo(true);

    }

    /* Evento para cerrar el informativo */
    const closePopup1 = () => {
        setPalacioInfo(false);
    };


    return (
        <group>

            {/* Estructura del templo y sus coordenadas */}
            <group name={"Palacio2"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-40, -1.5, -12]}
                    scale={0.8}

                />

                {/* Texto indica Palacio*/}
                {palacioText && (
                    <Text position={[-20, -2, 0.5]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
                       Estás Palacio de Faraón
                    </Text>
                )}
            </group>

        </group>
    );
}

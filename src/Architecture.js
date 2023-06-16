import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from './PopupWindow';

export default function Architecture() {

    // Modelo del templo Lúxor
    const nodes = useGLTF('./static/1Luxor-temple.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [luxorText, setLuxorText] = useState(false);
    const [luxorInfo, setLuxorInfo] = useState(false);
    const nameObj2 = "PILONOS";
    const obj2 = "Enorme obelisco, que simboliza un rayo de sol petrificado, sorprende al visitante. Su altura de 25 m casi obliga a mirar hacia arriba";


    /* Evento al hacer click derecho: Lúxor y direcciona hacia su interior */
    const event = (e) => {
        cameraRef.current.position.set(-18, -0.5, -1);
        setLuxorText(true);

        setTimeout(() => {
            setLuxorText(false);
        }, 1500);
    };

    /*Evento al hacer click sobre el obelisco*/

    const eventStatue = (e) => {
        e.stopPropagation = true;
        setLuxorInfo(true);

    }

    /* Evento para cerrar el informativo */
    const closePopup1 = () => {
        setLuxorInfo(false);
    };


    return (
        <group>

            {/* Estructura del templo y sus coordenadas */}
            <group name={"Egyptian temple"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-10, -2, -2]}
                    rotation-y={Math.PI / 2}
                    scale={0.1}

                />

                {/* Texto indica Lúxor*/}
                {luxorText && (
                    <Text position={[-20, -2, 0.5]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
                        Estás en Lúxor
                    </Text>
                )}
            </group>

        </group>
    );
}

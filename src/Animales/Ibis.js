import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from '../PopupWindow';

export default function Ibis() {

    // Modelo de Ibis
    const nodes  = useGLTF('./static/animales/white_ibis_-_eudocimus_albus.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [ibisText, setIbisText] = useState(false);

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setIbisText(true);

        setTimeout(() => {
            setIbisText(false);
        }, 1000);
    };


    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Ibis"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-38, -1, -8]}
                    rotation={[0, Math.PI/2 , 0]}
                    scale={0.8}

                />

                {/* Texto indica Ibis*/}
                {ibisText && (
                    <Text position={[-38, 0, -8]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
                       Este es un Ibis Blanco
                    </Text>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("/white_ibis_-_eudocimus_albus.glb");
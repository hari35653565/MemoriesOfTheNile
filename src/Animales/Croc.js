import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from '../PopupWindow';

export default function Croc() {

    // Modelo de Cocodrilo del Nilo
    const nodes = useGLTF('./static/animales/nile_crocodile_swimming.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [crocText, setCrocText] = useState(false);

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setCrocText(true);

        setTimeout(() => {
            setCrocText(false);
        }, 1000);
    };


    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Cocodrilo"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-42, -1.3, -5]}
                    rotation={[0, 6*Math.PI /8, 0]}
                    scale={0.25}

                />

                {/* Texto indica Cocodrilo*/}
                {crocText && (
                    <Text position={[-42, 0, -5]} rotation={[0, 6*Math.PI / 8, 0]} fontSize={0.3} color="white">
                       Este es un Cocodrilo del Nilo
                    </Text>
                )}
            </group>

        </group>
    );
}
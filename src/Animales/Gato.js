import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from '../PopupWindow';

export default function Gato() {

    // Modelo de Gato
    const nodes = useGLTF('./static/animales/somali_cat_animated_ver_1.2.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [catText, setCatText] = useState(false);

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setCatText(true);

        setTimeout(() => {
            setCatText(false);
        }, 1000);
    };


    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Gato"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-42, -1, -8]}
                    rotation={[0, 3*Math.PI/2 , 0]}
                    scale={0.1}

                />

                {/* Texto indica Gato*/}
                {catText && (
                    <Text position={[-42, 0, -8]} rotation={[0, 3*Math.PI / 2, 0]} fontSize={0.3} color="white">
                       Este es un Gato Abisinio
                    </Text>
                )}
            </group>

        </group>
    );
}
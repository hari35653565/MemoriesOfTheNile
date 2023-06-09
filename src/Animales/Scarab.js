import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from '../PopupWindow';

export default function Scarab() {

    // Modelo de Scarab
    const nodes  = useGLTF('./static/animales/jewel_scarab_beetle_nhmw-zoo2-col_0000014.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [scarabText, setScarabText] = useState(false);

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setScarabText(true);
        setTimeout(() => {
            setScarabText(false);
        }, 1000);
    };


    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Escarabajo"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-38, -1.4, -5]}
                    rotation={[0, 2*Math.PI , 0]}
                    scale={0.3}

                />

                {/* Texto indica Escarabajo*/}
                {scarabText && (
                    <Text position={[-38, 0, -5]} rotation={[0, 2*Math.PI, 0]} fontSize={0.3} color="white">
                       Este es un Escarabajo Joya
                    </Text>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("/white_ibis_-_eudocimus_albus.glb");
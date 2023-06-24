import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Anubis() {

    // Modelo de Anubis
    const nodes  = useGLTF('./static/dioses/anubis.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [scarabText, setScarabText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Anubis:'
    const popupText = 'Anubis (cuyo nombre egipcio es Inpu) es el guardián de \nlas tumbas asociado con la muerte \ny la vida después de ésta en la religión del Antiguo Egipto, \nseñor de las necrópolis y patrón de los embalsamadores, \nrepresentado como un chacal o un perro salvaje, \no como un hombre con cabeza de chacal.'

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setScarabText(true);
        setTimeout(() => {
            setScarabText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el escarabajo: Despliega informarción */

    const eventPopup = (e) => {
        e.stopPropagation()
        setShowPopup(true);

    };

    /* Evento para cerrar la ventana emergente  */
    const closePopup = (e) => {
        e.stopPropagation()
        setShowPopup(false);
    };

    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Anubis"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-16.4, 0, -8.3]}
                    rotation={[0, 0 , 0]}
                    scale={0.008}

                />

                {/* Texto indica Anubis*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-16.4, -0.2, -8.001]} rotation={[0, 0, 0]}>
                        <planeGeometry args={[1.4, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-16.4, -0.2, -8]} fontSize={0.05} color="white" rotation={[0, 0, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("./static/dioses/anubis.glb");
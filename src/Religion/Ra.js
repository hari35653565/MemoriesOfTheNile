import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Ra() {

    // Modelo de Ra
    const nodes  = useGLTF('./static/dioses/statue_of_ra.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [scarabText, setScarabText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Ra:'
    const popupText = 'Ra es el dios del Sol y del origen de la vida en la mitología egipcia. \nRa es el símbolo de la luz solar, creador de vida. \nDios que representa el sol del mediodía, en su máximo esplendor. \nEn los primeros tiempos era la figura más importante del Mundo Inferior; \nse decía que cada noche viajaba por él bajo la forma de Auf-Ra, el sol poniente.'

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
            <group name={"Ra"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-19.5, -1.9, -8.2]}
                    rotation={[0, 0 , 0]}
                    scale={5}

                />

                {/* Texto indica Ra*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-19.5, 0, -8.1]} rotation={[0, 0, 0]}>
                        <planeGeometry args={[2.4, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-19.5, 0, -8.0999]} fontSize={0.05} color="white" rotation={[0, 0, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("./static/dioses/statue_of_ra.glb");
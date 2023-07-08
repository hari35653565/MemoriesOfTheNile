import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';

import * as THREE from 'three';

export default function Ibis() {

    // Modelo de Ibis
    const nodes  = useGLTF('./static/animales/ibis.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [ibisText, setIbisText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Ibis Sagrado:'
    const popupText = 'El ibis sagrado (Threskiornis aethiopicus) \nes una especie de ave pelecaniforme de la familia Threskiornithidae \npropia de puntos de África y Oriente Medio. \nEs un ave especialmente conocida por su papel en la religión del Antiguo Egipto \nen la que era la personificación del dios Thot.'

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setIbisText(true);

        setTimeout(() => {
            setIbisText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el ibis: Despliega informarción */

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
            <group name={"Ibis"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-38, -1.3, -7]}
                    rotation={[0, 0 , 0]}
                    scale={0.0008}

                />

                {/* Texto indica Ibis*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-38., -0.5, -7]} rotation={[0, -1*Math.PI/2, 0]}>
                        <planeGeometry args={[2, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-38.01, -0.5, -7]} fontSize={0.05} color="white" rotation={[0, -1*Math.PI/2, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("./static/animales/ibis.glb");
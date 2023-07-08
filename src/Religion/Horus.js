import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Horus() {

    // Modelo de Horus
    const nodes  = useGLTF('./static/dioses/horus.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Horus:'
    const popupText = 'Horus («halcón»; también «el elevado», «el distante») es \nuna de las más importantes deidades del antiguo Egipto, \nque desempeñaba numerosas funciones, de manera más notable \ncomo dios de la realeza y del cielo en la mitología egipcia, \nasí como de la guerra y de la caza. \n​A veces se le consideraba como el iniciador de la civilización egipcia. '


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
            <group name={"Horus"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-22.27, -1.17, -6.37]}
                    rotation={[0, Math.PI/2 , 0]}
                    scale={1}

                />

                {/* Texto indica Horus*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-22.001, -0.2, -6]} rotation={[0, Math.PI/2, 0]}>
                        <planeGeometry args={[2.4, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-22, -0.2, -6]} fontSize={0.05} color="white" rotation={[0, Math.PI/2, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("./static/dioses/horus.glb");
import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Ankh() {

    // Modelo de Ankh
    const nodes  = useGLTF('./static/ankh_asset.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [scarabText, setScarabText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Religion en el Antiguo Egipto:'
    const popupText = 'La religión del Antiguo Egipto era politeísta, \nde manera que los egipcios creían en varios dioses. \nEn los orígenes de la civilización, los dioses eran zoomorfos y tenían forma animal. \nA medida que fue pasando el tiempo, les atribuyeron características humanas. \nTenían un papel trascendental en la vida de la sociedad, \ne incluso informaban a los faraones sobre las decisiones que debían tomar.'

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
            <group name={"Ankh"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-18, -0.5, -4.6]}
                    rotation={[0, Math.PI/2 , 0]}
                    scale={0.01}

                />

                {/* Texto indica Ankh*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-18, -0.5, -3.1]} rotation={[0, 0, 0]}>
                        <planeGeometry args={[2.4, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-18, -0.5, -3]} fontSize={0.05} color="white" rotation={[0, 0, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("./static/ankh_asset.glb");
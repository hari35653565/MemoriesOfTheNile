import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Bastet() {

    // Modelo de Bastet
    const nodes  = useGLTF('./static/dioses/bastet.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [scarabText, setScarabText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Bastet:'
    const popupText = 'Bastet o Bast es una diosa del antiguo Egipto, \nadorada desde la Segunda Dinastía (2890 a. C.). \nRepresenta la protección, el amor y la armonía. \nProtectora de los hogares y templos. \nFue la diosa de la guerra en el Bajo Egipto, región del Delta del Nilo, \nantes de la unificación de las culturas del antiguo Egipto.'

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {

        setScarabText(true);
        setTimeout(() => {
            setScarabText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el escarabajo: Despliega informarción */

    const eventPopup = (e) => {
        e.stopPropagation();
        setShowPopup(true);

    };

    /* Evento para cerrar la ventana emergente  */
    const closePopup = (e) => {
        e.stopPropagation();
        setShowPopup(false);
    };

    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Bastet"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-22.3, -1.35, -4.2]}
                    rotation={[0, Math.PI/4 , 0]}
                    scale={0.01}

                />

                {/* Texto indica Bastet*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-22.001, -0.2, -4]} rotation={[0, Math.PI/2, 0]}>
                        <planeGeometry args={[2.4, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-22, -0.2, -4]} fontSize={0.05} color="white" rotation={[0, Math.PI/2, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("./static/dioses/bastet.glb");
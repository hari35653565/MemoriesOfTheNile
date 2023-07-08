import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';


export default function Scarab() {

    // Modelo de Scarab
    const nodes  = useGLTF('./static/animales/jewel_scarab_beetle_nhmw-zoo2-col_0000014.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [scarabText, setScarabText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Escarabajo Joya:'
    const popupText = 'El escarabajo era sagrado en el antiguo Egipto \nporque se relaciona con el dios Khepri (pronunciado más o menos como Jepri), \nquien se creó a sí mismo y volvía a nacer cada mañana de la misma manera que renace el Sol, \nen un ciclo ininterrumpido; de hecho, este dios hacía que el Sol amaneciera. '

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
            <group name={"Escarabajo"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-38, -1.4, -5]}
                    rotation={[0, 2*Math.PI , 0]}
                    scale={0.3}

                />

                {/* Texto indica Escarabajo*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-38., -0.5, -5]} rotation={[0, -1*Math.PI/2, 0]}>
                        <planeGeometry args={[2.4, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-38.01, -0.5, -5]} fontSize={0.05} color="white" rotation={[0, -1*Math.PI/2, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("/white_ibis_-_eudocimus_albus.glb");
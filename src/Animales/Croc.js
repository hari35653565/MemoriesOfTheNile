import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three'

export default function Croc() {

    // Modelo de Cocodrilo del Nilo
    const nodes = useGLTF('./static/animales/nile_crocodile_swimming.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [crocText, setCrocText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Cocodrilo del Nilo:'
    const popupText = 'Dentro de la poblada fauna del Nilo, \nel cocodrilo ha sido siempre una de las presencias más características e inquietantes.\nCon hasta seis metros de longitud, su poderosa mandíbula y su escudo de escamas, \nrepresentaba una amenaza constante y angustiosa para los antiguos egipcios,\n acostumbrados a navegar y pescar en frágiles barcas de papiro. \nNo es extraño, por ello, que este temible animal ocupara un lugar destacado en la cultura faraónica.\n _National Geographic'

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setCrocText(true);

        setTimeout(() => {
            setCrocText(false);
        }, 1000);
    };

      /*Evento al hacer click sobre el cocodrilo: Despliega informarción */

    const eventPopup = (e) => {
        e.stopPropagation()
        setShowPopup(true);

    }

    /* Evento para cerrar la ventana emergente  */
    const closePopup = (e) => {
        e.stopPropagation()
        setShowPopup(false);
    };

    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Cocodrilo"} onClick={eventPopup} >
                <primitive
                    object={nodes.scene}
                    position={[-42, -1.3, -5]}
                    rotation={[0, 6*Math.PI /8, 0]}
                    scale={0.25}

                />
            </group>
            {/* Texto indica Cocodrilo*/}
            {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-41.5001, -0.5, -5]} rotation={[0, Math.PI/2, 0]}>
                        <planeGeometry args={[2.4, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-41.5, -0.5, -5]} fontSize={0.05} color="white" rotation={[0, Math.PI/2, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}

        </group>
    );
}
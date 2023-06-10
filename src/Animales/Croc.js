import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from '../PopupWindow';

export default function Croc() {

    // Modelo de Cocodrilo del Nilo
    const nodes = useGLTF('./static/animales/nile_crocodile_swimming.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [crocText, setCrocText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Cocodrilo del Nilo'
    const popupText = 'entro de la poblada fauna del Nilo, el cocodrilo ha sido siempre una de las presencias más características e inquietantes. Con hasta seis metros de longitud, su poderosa mandíbula y su escudo de escamas, representaba una amenaza constante y angustiosa para los antiguos egipcios, acostumbrados a navegar y pescar en frágiles barcas de papiro. No es extraño, por ello, que este temible animal ocupara un lugar destacado en la cultura faraónica. _National Geographic'

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setCrocText(true);

        setTimeout(() => {
            setCrocText(false);
        }, 1000);
    };

      /*Evento al hacer click sobre el cocodrilo: Despliega informarción */

    const eventPopup = (e) => {
        e.stopPropagation = true;
        setShowPopup(true);

    }

    /* Evento para cerrar la ventana emergente  */
    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Cocodrilo"} onClick={eventPopup} >
                <primitive
                    object={nodes.scene}
                    position={[-42, -1.5, -5]}
                    rotation={[0, 6*Math.PI /8, 0]}
                    scale={0.3}

                />

                {/* Texto indica Cocodrilo*/}
                {crocText && (
                    <Text position={[-42, 0, -5]} rotation={[0, 6*Math.PI / 8, 0]} fontSize={0.3} color="white">
                        Este es un Cocodrilo del Nilo
                    </Text>
                )}
                <PopupWindow
                isOpen={showPopup}
                onClose={closePopup}
                title={popupTitle}
                text={popupText}
                />
            </group>

        </group>
    );
}
import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from '../PopupWindow';

export default function Ibis() {

    // Modelo de Ibis
    const nodes  = useGLTF('./static/animales/white_ibis_-_eudocimus_albus.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [ibisText, setIbisText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Ibis Sagrado'
    const popupText = 'El ibis sagrado (Threskiornis aethiopicus) es una especie de ave pelecaniforme de la familia Threskiornithidae2​3​ propia de puntos de África y Oriente Medio. Es un ave especialmente conocida por su papel en la religión del Antiguo Egipto en la que era la personificación del dios Thot.'

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setIbisText(true);

        setTimeout(() => {
            setIbisText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el ibis: Despliega informarción */

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
            <group name={"Ibis"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-38, -1, -8]}
                    rotation={[0, Math.PI/2 , 0]}
                    scale={0.5}

                />

                {/* Texto indica Ibis*/}
                {ibisText && (
                    <Text position={[-38, 0, -8]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
                        Este es un Ibis Sagrado
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

useGLTF.preload("/white_ibis_-_eudocimus_albus.glb");
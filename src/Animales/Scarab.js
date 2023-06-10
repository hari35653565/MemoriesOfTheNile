import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from '../PopupWindow';

export default function Scarab() {

    // Modelo de Scarab
    const nodes  = useGLTF('./static/animales/jewel_scarab_beetle_nhmw-zoo2-col_0000014.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [scarabText, setScarabText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Escarabajo Joya'
    const popupText = 'El escarabajo era sagrado en el antiguo Egipto porque se relaciona con el dios Khepri (pronunciado más o menos como Jepri), quien se creó a sí mismo y volvía a nacer cada mañana de la misma manera que renace el Sol, en un ciclo ininterrumpido; de hecho, este dios hacía que el Sol amaneciera. '

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setScarabText(true);
        setTimeout(() => {
            setScarabText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el escarabajo: Despliega informarción */

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
            <group name={"Escarabajo"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-38, -1.4, -5]}
                    rotation={[0, 2*Math.PI , 0]}
                    scale={0.3}

                />

                {/* Texto indica Escarabajo*/}
                {scarabText && (
                    <Text position={[-38, 0, -5]} rotation={[0, 2*Math.PI, 0]} fontSize={0.3} color="white">
                        Este es un Escarabajo Joya
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
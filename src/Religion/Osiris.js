import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Osiris() {

    // Modelo de Osiris
    const nodes  = useGLTF('./static/dioses/osiris.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Osiris:'
    const popupText = 'Bastet o Bast es una diosa del antiguo Egipto, \nadorada desde la Segunda Dinastía (2890 a. C.). \nRepresenta la protección, el amor y la armonía. \nProtectora de los hogares y templos. \nFue la diosa de la guerra en el Bajo Egipto, región del Delta del Nilo, \nantes de la unificación de las culturas del antiguo Egipto.'

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
            <group name={"Osiris"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-13.7, -0.95, -3.85]}
                    rotation={[0, -1*Math.PI/2 , 0]}
                    scale={0.1}

                />

                {/* Texto indica Osiris*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-14, -0.3, -3.85]} rotation={[0, Math.PI/2, 0]}>
                        <planeGeometry args={[1.8, 0.5]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-14.001, -0.3, -3.85]} fontSize={0.05} color="white" rotation={[0, -1*Math.PI/2, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("./static/dioses/osiris.glb");
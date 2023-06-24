import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Isis() {

    // Modelo de Isis
    const nodes  = useGLTF('./static/dioses/isis.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Isis:'
    const popupText = 'Isis es una de las principales diosas de la religión del Antiguo Egipto, \ncuyo culto se extendió por todo el mundo grecorromano. \nAparece por primera vez durante el Imperio Antiguo (c. 2686-2181 a. C.) \ncomo uno de los principales personajes del mito de Osiris, \nen el que resucita a su esposo asesinado, el divino rey Osiris, \ny engendra y protege a su heredero, Horus. \nSe creía que ayudaba a los muertos a entrar en la otra vida \ncomo había ayudado a Osiris y se la consideraba la madre divina del faraón, \na quien se le identificaba con el dios Horus. '

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
            <group name={"Isis"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-13.7, -1.18, -5.9]}
                    rotation={[0, -1*Math.PI/2 , 0]}
                    scale={0.01}

                />

                {/* Texto indica Isis*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-14, -0.3, -6]} rotation={[0, Math.PI/2, 0]}>
                        <planeGeometry args={[1.8, 0.6]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-14.001, -0.3, -6]} fontSize={0.05} color="white" rotation={[0, -1*Math.PI/2, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}

useGLTF.preload("./static/dioses/osiris.glb");
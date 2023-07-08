import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Gato() {

    // Modelo de Gato
    const nodes = useGLTF('./static/animales/somali_cat_animated_ver_1.2.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [catText, setCatText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Gato Abisinio:'
    const popupText = 'El gato es uno de los animales cuyos atributos se veneraban en el Antiguo Egipto. \nSe lo asociaba sobre todo con la protección, \nya que al ser perteneciente de la familia de los felinos, \nse lo asemejaría directamente con el león, \nel cual para los egipcios, sería el dios del sol, Ra. \nInicialmente se creía que era una encarnación del dios Ra como matador de la serpiente Apofis, \npero alcanzó su máximo de influencia cuando se lo \nconsideró la encarnación de la diosa Bastet, \la cual es una Diosa que representaba el amor, la fecundidad, \nla belleza, la armonía y la protección. \nAdemás, los gatos fueron asociados con el nombre de esta diosa Bastet. \nPor más de 3.000 años los gatos estuvieron representados en las \nprácticas sociales y religiosas del antiguo Egipto. '

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setCatText(true);

        setTimeout(() => {
            setCatText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el gato: Despliega informarción */

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
            <group name={"Gato"} onClick={eventPopup}>
                <primitive
                    object={nodes.scene}
                    position={[-42, -1.28, -8]}
                    rotation={[0, 3*Math.PI/2 , 0]}
                    scale={0.1}

                />

                {/* Texto indica Gato*/}
                {showPopup && (
                    <group onClick={closePopup}>
                    <mesh position={[-42.0001, -0.5, -8]} rotation={[0, Math.PI/2, 0]}>
                        <planeGeometry args={[2.4, 0.7]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8}  side={THREE.DoubleSide}/>
                    </mesh>
                    <Text position={[-42, -0.5, -8]} fontSize={0.05} color="white" rotation={[0, Math.PI/2, 0]}>
                        { `${popupTitle}\n${popupText}`}
                    </Text>
                    </group>
                )}
            </group>

        </group>
    );
}
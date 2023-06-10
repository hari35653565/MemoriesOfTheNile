import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from '../PopupWindow';

export default function Gato() {

    // Modelo de Gato
    const nodes = useGLTF('./static/animales/somali_cat_animated_ver_1.2.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [catText, setCatText] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupTitle = 'Gato Abisinio'
    const popupText = 'El gato es uno de los animales cuyos atributos se veneraban en el Antiguo Egipto. Se lo asociaba sobre todo con la protección, ya que al ser perteneciente de la familia de los felinos, se lo asemejaría directamente con el león, el cual para los egipcios, sería el dios del sol, Ra. Inicialmente se creía que era una encarnación del dios Ra como matador de la serpiente Apofis, pero alcanzó su máximo de influencia cuando se lo consideró la encarnación de la diosa Bastet, la cual es una Diosa que representaba el amor, la fecundidad, la belleza, la armonía y la protección. Además, los gatos fueron asociados con el nombre de esta diosa Bastet. Por más de 3.000 años los gatos estuvieron representados en las prácticas sociales y religiosas del antiguo Egipto. '

    /* Evento al hacer click derecho al modelo y acceder a su informacion */
    const event = (e) => {
        setCatText(true);

        setTimeout(() => {
            setCatText(false);
        }, 1000);
    };

    /*Evento al hacer click sobre el gato: Despliega informarción */

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
            <group name={"Gato"} onContextMenu={event}>
                <primitive
                    object={nodes.scene}
                    position={[-42, -1, -8]}
                    rotation={[0, 3*Math.PI/2 , 0]}
                    scale={0.1}

                />

                {/* Texto indica Gato*/}
                {catText && (
                    <Text position={[-42, 0, -8]} rotation={[0, 3*Math.PI / 2, 0]} fontSize={0.3} color="white">
                        Este es un Gato Abisinio
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
import React, { useState } from 'react';
import {useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from './PopupWindow';

export default function Lobby() {
  const nodes = useGLTF('./static/lobby_temple.glb');  //modelo del lobby
  const map = useGLTF('./static/map_structure.glb');   //modelo para mapa
  const statueKefren = useGLTF('./static/khafre.glb'); //modelo estatuda de Kefrén
  const { camera } = useThree();
  const cameraRef = useRef(camera);
  const [showText, setShowText] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const popupTitle = "KEFRÉN";
  const popupText = "Faraón de la dinastía IV. Construyó la segunda pirámide más grande de Egipto (Altura 143,5m). También se le adjudica la Gran Esfinge, el templo funerario, entre otras grandes obras.";


  /* Evento al hacer click derecho sobre la estructura lobby: posiciona la cámara dentro del lobby */
  const event = (e) => {
    cameraRef.current.position.set(8, -0.7, 1);
    setShowText(true);

    setTimeout(() => {
      setShowText(false);
    }, 1500);
  };

  /*Evento al hacer click sobre la estatua de kefrén: Despliega informarción */

  const eventStatue = (e) => {
    e.stopPropagation = true;
    setShowPopup1(true);

  }

  /* Evento para cerrar la ventana emergente  */
  const closePopup1 = () => {
    setShowPopup1(false);
  };


  return (
    <group>
      {/* Estructura del lobby */}
      <group name={"Lobby structure"} onContextMenu={event}>
        <primitive
          object={nodes.nodes.Plane001}
          position={[8, -1.2, -0.5]}
          scale={0.5}

        />
        {/* Texto al ingresar al Lobby */}
        {showText && (
          <group>
        <mesh position={[8, 0.05, -0.6]}>
            <planeBufferGeometry args={[2.5, 0.45]} />
            <meshBasicMaterial color="black" transparent opacity={0.8} />
          </mesh>
            <Text position={[8, 0, -0.5]}  fontSize={0.3} color="white" font="./bangers-v20-latin-regular.woff"> 
            Estas en el lobby
            </Text>
          </group>
        )}
      </group>
      {/* Estructura para la guía */}
      <group name={'map structure'}>
        <primitive
          object={map.scene}
          scale={0.3}
          position={[6.5,-0.98,-0.26]}

        />
      </group>

      {/* Estructura para la estatua de kefrén */}
      <group name={'khafre'} onClick={eventStatue}>
        <primitive
          object={statueKefren.scene}

          position={[7.7, 1.22, -3]}
          scale={0.13}


        />
        {/* Ventana emergente de información */}
        <PopupWindow
          isOpen={showPopup1}
          onClose={closePopup1}
          title={popupTitle}
          text={popupText}
        />

      </group>


    </group>
  );
}

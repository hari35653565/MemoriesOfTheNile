import React, { useState } from 'react';
import { Float, useGLTF, Text } from '@react-three/drei';
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


  /* Evento al hacer click derecho sobre la estructura del mapa: posiciona la cámara dentro del lobby */
  const event = (e) => {
    cameraRef.current.position.set(9.5, -0.7, 0.5);
    setShowText(true);

    setTimeout(() => {
      setShowText(false);
    }, 1000);
  };

  /*Evento al hacer click sobre la estructura: Despliega informarción */

  const eventStatue = (e) => {
    e.stopPropagation = true;
    setShowPopup1(true);

  }

  /* Evento para cerrar la ventana emergente */
  const closePopup1 = () => {
    setShowPopup1(false);
  };


  return (
    <group>
      {/* Estructura del lobby */}
      <group name={"Lobby structure"} onContextMenu={event}>
        <primitive
          object={nodes.nodes.Plane001}
          position={[8, -1, 0.03]}
          scale={0.5}

        />
        {/* Texto al ingresar al Lobby */}
        {showText && (
          <Text position={[8, -0.44, 0.5]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
            Estas en el lobby
          </Text>
        )}
      </group>
      {/* Estructura para el mapa */}
      <group name={'map structure'}>
        <primitive
          object={map.scene}
          position-y={-0.7}
          scale={0.4}
          position-x={8}

        />
      </group>

      {/* Estructura para la estatua de kefrén */}
      <group name={'khafre'} onClick={eventStatue}>
        <primitive
          object={statueKefren.scene}

          position={[7.7, 1.22, -3]}
          scale={0.13}


        />
        {/* Ventana emergente  */}
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

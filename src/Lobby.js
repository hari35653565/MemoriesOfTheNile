import React, { useState, useEffect } from 'react';
import { useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import PopupWindow from './PopupWindow';


export default function Lobby() {
  const nodes = useGLTF('./static/lobby_temple.glb');  //modelo del lobby
  const map = useGLTF('./static/map_structure.glb');   //modelo para mapa
  const statueKefren = useGLTF('./static/khafre.glb'); //modelo estatuda de Kefrén
  const { camera } = useThree();
  // const cameraRef = useRef(camera);
  const [showText, setShowText] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [flagEnter, setFlagEnter] = useState(false);

  //deshabilitar el menu contextual del navegador
  useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', disableContextMenu);


  }, []);


  /* Evento al hacer click derecho sobre la estructura lobby: posiciona la cámara dentro del lobby */
  const eventEntrar = (e) => {
    e.stopPropagation()
    console.log("templo");
    if(flagEnter===false){
      camera.position.set(8, -0.7, 1);
      //camera.rotation.y=Math.PI/2
      setShowText(true);
      setTimeout(() => {
        setShowText(false);
      }, 1500);
      setFlagEnter(true);
    }
  };

  // const eventSalir = ()=>{}



  /*Evento al hacer click sobre la estatua de kefrén: Despliega informarción */

  const eventStatue = (e) => {
    e.stopPropagation()
    console.log("statua")
    // se usa la bandera para que no se active la funcionalidad de la estatua desde afuera del templo, en  la entrada, ya que es un espacio "libre"
    if(flagEnter===true){ 
      console.log("oprimiste sobre la estatua")
      setShowPopup1(true);
    }
  }

  /* Evento para cerrar la ventana emergente  */
  const closeStatuePopup= (e) => {
    e.stopPropagation()
    console.log("abriste la ventana")
    setShowPopup1(false);
  };

  return (
    <>
      {/* Estructura del lobby */}
      <group name={"Lobby structure"} >
        <primitive
          preventDefault={true}
          object={nodes.nodes.Plane001}
          position={[8, -1.2, -0.5]}
          scale={0.5}
          onClick={eventEntrar}
        />
        {/* Texto al ingresar al Lobby */}
        {showText && (
          <group>
            <mesh position={[8, 0.05, -0.6]}>
              <planeBufferGeometry args={[2.5, 0.45]} />
              <meshBasicMaterial color="black" transparent opacity={0.8} />
            </mesh>
            <Text position={[8, 0, -0.5]} fontSize={0.3} color="white" font="./bangers-v20-latin-regular.woff">
              Estas en el lobby
            </Text>
          </group>
        )}
      </group>

      {/* Estructura blanca para la guía */}

      <primitive object={map.scene}
        scale={0.28}
        position={[6.5, -0.99, -0.27]}
      />



      {/* Estructura para la estatua de kefrén */}
      <group>
        <primitive
          preventDefault={true}
          object={statueKefren.scene}
          onClick={eventStatue}
          position={[7.7, 1, -3]}
          scale={0.13}
        />
      </group>

      {/* Ventana emergente de información estatua kefrén*/}
      {showPopup1 && (
        <group onClick={closeStatuePopup}>
          <mesh position={[8, -0.6, -0.6]}>
            <planeBufferGeometry args={[2.2, 0.5]} />
            <meshBasicMaterial color="black" transparent opacity={0.8} />
          </mesh>
          <Text position={[8, -0.6, -0.5]} fontSize={0.06} color="white" font="Arial">
            {' KEFRÉN:\n\n Faraón de la dinastía IV. Construyó la segunda pirámide más grande\n de Egipto(Altura 143,5m). También se le adjudica la Gran Esfinge,\n el templo funerario, entre otras grandes obras.'}
          </Text>
        </group>
      )}




    </>

  );
}



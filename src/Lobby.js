import React, { useState, useEffect } from 'react';
import { useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { MeshBasicMaterial, TextureLoader } from 'three';


export default function Lobby() {
  const nodes = useGLTF('./static/lobby_temple.glb');  //modelo del lobby
  const map = useGLTF('./static/map_structure.glb');   //modelo para mapa
  const statueKefren = useGLTF('./static/khafre.glb'); //modelo estatuda de Kefrén
  const exit= useGLTF('./static/hand.glb');// modelo para salir del lobby
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

  const eventSalir = ()=>{
    if(flagEnter===true){
      camera.position.set(8, 0, 5);
      setFlagEnter(false)
    }
  }



  /*Evento al hacer click sobre la estatua de kefrén: Despliega informarción */

  const eventStatue = (e) => {
    e.stopPropagation()
    // se usa la bandera para que no se active la funcionalidad de la estatua desde afuera del templo, en  la entrada, ya que es un espacio "libre"
    if(flagEnter===true){ 
      setShowPopup1(true);
    }
  }

  /* Evento para cerrar la ventana emergente  */
  const closeStatuePopup= (e) => {
    e.stopPropagation()
    setShowPopup1(false);
  };

  /* elementos para cargar imagen exit */
  const textureLoader = new TextureLoader();
  const textureExit = textureLoader.load('/static/assets/salirLobby.png');
  const materialExit = new MeshBasicMaterial({ map: textureExit, transparent: true });

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
            <mesh position={[8, -0.5, -0.6]}>
              <planeGeometry args={[1.8, 0.4]} />
              <meshBasicMaterial color="black" transparent opacity={0.8} />
            </mesh>
            <Text position={[8, -0.5, -0.5]} fontSize={0.2} color="white" font="./bangers-v20-latin-regular.woff">
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



      
      <group>
        {/* Estructura para la estatua de kefrén */}
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
          <mesh position={[8, -0.6, 0.34]}>
            <planeGeometry args={[2, 0.5]} />
            <meshBasicMaterial color="black" transparent opacity={0.8} />
          </mesh>
          <Text position={[8, -0.6, 0.35]} fontSize={0.06} color="white" >
            {' KEFRÉN:\n\n Faraón de la dinastía IV. Construyó la segunda pirámide más grande\n de Egipto (Altura 143,5m). También se le adjudica la Gran Esfinge,\n el templo funerario, entre otras grandes obras.'}
          </Text>
        </group>
      )}

      {/* Estructura para el exit */}
      <group onClick={eventSalir}>
        <mesh
          material={materialExit}
          position={[9.5, -0.78, -1]}
          rotation-y={5.5*Math.PI/3}
          scale={0.5}
          transparent={true}>
          <planeGeometry args={[1, 1.6]} />
        </mesh>
        <mesh position={[8, -0.7, 2]}>
          <boxGeometry args={[1.5, 1.7, 0.05]} />
          <meshBasicMaterial color="black" transparent opacity={0.01} />
        </mesh>

      </group>

    </>

  );
}



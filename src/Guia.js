import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Html, Image} from '@react-three/drei';
import { useThree,useFrame } from '@react-three/fiber';
import { MeshBasicMaterial, TextureLoader } from 'three';



function Guia ({showButton}) {
  const menuRef = useRef(null);
  const { viewport } = useThree();
  const { camera} = useThree();
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const [componentPositions, setComponentPositions] = useState({
    close: [0, 0, 0],
    guia: [0, 0, 0],
    prev: [0, 0, 0],
    next: [0, 0, 0],
    buttonGuia: [0, 0, 0]
  });

  const images = [
    '/static/assets/GuiaMapa.png',
    '/static/assets/GuiaMenu.png',
    '/static/assets/GuiaObjetos.png',
    '/static/assets/GuiaCursor.jpg',
  ];

  const textureLoader = new TextureLoader();
  const textureGuia = textureLoader.load('/static/assets/GuiaPergamino.png');
  const materialGuia = new MeshBasicMaterial({ map: textureGuia, transparent: true });

  const textureExit = textureLoader.load('/static/assets/exitIcon.png');
  const materialExit = new MeshBasicMaterial({ map: textureExit, transparent: true });

  const textureNext = textureLoader.load('/static/assets/nextIcon.png');
  const materialNext = new MeshBasicMaterial({ map: textureNext, transparent: true });

  const texturePrev = textureLoader.load('/static/assets/previousIcon.png');
  const materialPrev = new MeshBasicMaterial({ map: texturePrev, transparent: true });

  const textureGuiaIcon = textureLoader.load('static/assets/guiaIcon.png');
  const materialGuiaIcon = new MeshBasicMaterial({map: textureGuiaIcon, transparent: true });

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const showPreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const openModal = (e) => {
    setShowModal(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  /*
  *Cambiar posiciones de los componentes de la guía:
  *Se asignan todas las nuevas posiciones y se almacenan en 'newComponentPositions'
  *Se verifica si ha habido algún cambio en las posiciones, si hay cambios, se actualiza el estado 'componentPositions'
  */

  useFrame(() => {
    const currentPosition = camera.position.toArray().join(',');
    const newComponentPositions = { ...componentPositions };

    if (currentPosition === '8,0,5') {
      //cuando está frente al lobby
      newComponentPositions.buttonGuia = [15, 3, 0.03];
      newComponentPositions.close = [7.75, -0.45, 4];
      newComponentPositions.guia = [8, 0.1, 4];
      newComponentPositions.prev = [7.85, -0.45, 4];
      newComponentPositions.next = [7.95, -0.45, 4];
    } else if (currentPosition === '8,-0.7,1') {
      //cuando está dentro del lobby
      newComponentPositions.buttonGuia = [7, 3, 0.03];
      newComponentPositions.close = [7.75, -1.051, 0.03];
      newComponentPositions.guia = [8, -0.5, 0.03];
      newComponentPositions.prev = [7.85, -1.05, 0.031];
      newComponentPositions.next = [7.95, -1.05, 0.031];
    } else if (currentPosition === '0,0,5') {
      //cuando está frente a la piramide y esfinge
      newComponentPositions.buttonGuia = [7, 3, 0.03];
      newComponentPositions.close = [-0.21, -0.45, 4];
      newComponentPositions.guia = [0, 0.1, 4];
      newComponentPositions.prev = [-0.1, -0.45, 4];
      newComponentPositions.next = [0, -0.45, 4];

    } else if (currentPosition === '-18,0,5') {
      //cuando está frente a la estructura 'arquitectura'
      newComponentPositions.buttonGuia = [-11, 3, 0.03];
      newComponentPositions.close = [-18.2, -0.45, 4];
      newComponentPositions.guia = [-18, 0.1, 4];
      newComponentPositions.prev = [-18.1, -0.45, 4];
      newComponentPositions.next = [-18, -0.45, 4];
    } else if (currentPosition === '-40,0,5') {
      //cuando esta frente al templo 2
      newComponentPositions.buttonGuia = [-33, 3, 0.03];
      newComponentPositions.close = [-40.2, -0.45, 4];
      newComponentPositions.guia = [-40, 0.1, 4];
      newComponentPositions.prev = [-40.1, -0.45, 4];
      newComponentPositions.next = [-40, -0.45, 4];
    } else if (currentPosition ==='15,0,5'){
      //cuando esta frente a Ramses
      newComponentPositions.buttonGuia = [22, 3, 0.03];
      newComponentPositions.close = [14.81, -0.45, 4];
      newComponentPositions.guia = [15, 0.1, 4];
      newComponentPositions.prev = [14.9, -0.45, 4];
      newComponentPositions.next = [15, -0.45, 4];
    }

    const hasPositionChanges = Object.keys(componentPositions).some(
      (key) => componentPositions[key].join(',') !== newComponentPositions[key].join(',')
    );

    if (hasPositionChanges) {
      setComponentPositions(newComponentPositions);
    }
  });



  return (
    <>
    <group ref={menuRef}>

      {showButton&&(<mesh material={materialGuiaIcon}
      position={componentPositions.buttonGuia}
      scale={1.5}
      onClick={openModal}
      >
        <boxGeometry  args={[0.6, 0.5,0.4]} />
      </mesh>)}
      {/* <mesh>
        {showButton&&(<Html position={componentPositions.buttonGuia} center>
          <button onClick={openModal}>Ver Guía</button>
        </Html>)}
      </mesh> */}

      {showModal && (
        <group>
            <group >
              <mesh position={componentPositions.guia} >
                <Image url={images[currentImage]}
                  scale={[1.5, 1, 1]}
                  onClick={(e) => e.stopPropagation()}
                />
              </mesh>
            </group>

            
            <group onClick={closeModal}>
              <mesh position={componentPositions.close}
                material={materialExit}
                scale={0.08}>
                <planeGeometry args={[1, 1.2]} />
              </mesh>
            </group>

            <group onClick={showNextImage}>
              <mesh position={componentPositions.next}
                material={materialNext}
                scale={0.08}>
                <planeGeometry args={[1, 1.2]} />
              </mesh>
            </group>

            <group onClick={showPreviousImage}>
              <mesh position={componentPositions.prev}
                material={materialPrev}
                scale={0.08}
                >
                <planeGeometry args={[1, 1.2]} />
              </mesh>
            </group>

        </group>

      )}


    </group>

    {/* Imagen para opción de guía que está en el lobby */}   
    <group onClick={openModal}>
      <mesh 
        material={materialGuia}
        position={[6.5,-0.72,-0.26]} 
        scale={0.3} 
        >
        <planeGeometry args={[1, 1.2]} />
      </mesh>  
    </group>
    </>
    
  );
};

export default Guia;


import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Html} from '@react-three/drei';
import { useThree,useFrame } from '@react-three/fiber';
import { MeshBasicMaterial, TextureLoader } from 'three';

function Guia () {
  const menuRef = useRef(null);
  const { viewport } = useThree();
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/static/assets/GuiaMapa.png',
    '/static/assets/GuiaMenu.png',
    '/static/assets/GuiaObjetos.png',

  ];

  const textureLoader = new TextureLoader();
  const textureGuia = textureLoader.load('/static/assets/GuiaPergamino.png');
  const materialGuia = new MeshBasicMaterial({ map: textureGuia, transparent: true });


  const showNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const openModal = (e) => {
    e.stopPropagation()
    console.log("ver la guiaaaaa")
    setShowModal(true);
  };

  const closeModal = (e) => {
    e.stopPropagation()
    setShowModal(false);
  };


  // const imageRef = useRef();
  // let speed = 0.0004; // Velocidad de movimiento vertical de la imagen del pergamino en lobby

  // useFrame(() => {
  //   // Actualizar la posición vertical de la imagen en lobby
  //   imageRef.current.position.y += speed;
  //   if (imageRef.current.position.y > -0.675 || imageRef.current.position.y < -0.725) {
  //     speed *= -1; // Invertir la dirección si se alcanza el límite superior o inferior
  //   }
  // });

  return (
    <>
    <group ref={menuRef}>
      <mesh>
        {/* Button geometry and material */}
       {/* <meshBasicMaterial color="blue" />
       onClick={openModal}*/}
        <Html position={[8, -0.5, 0.03]} center>
          {/* <button >Ver Guía</button> */}
        </Html>
      </mesh>
      {showModal && (
        <Html position={[8, -0.5, 0.03]} center>
          <div className="modal">
            <div className="modal-content" style={{ background: 'orange', width: '600px'}}>
              <button className="close" style={{ justifyContent: 'flex-end'}} onClick={closeModal}>&times; </button>
              <div className="image-container">
                <img
                  src={images[currentImage]}
                  alt={`Image ${currentImage + 1}`}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="button-container" >
                <button onClick={showPreviousImage}>Anterior</button>
                <button onClick={showNextImage}>Siguiente</button>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
    <group onClick={openModal}>
    {/* Imagen guía que está en el lobby */}
      <mesh 
        material={materialGuia}
        position={[6.5,-0.72,-0.26]} 
        scale={0.3} 
        transparent={true}>
        <planeGeometry args={[1, 1.2]} />
      </mesh>
      

      

    </group>
    
    </>
    
  );
};

export default Guia;


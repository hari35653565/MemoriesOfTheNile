import React, { useEffect, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Guia = () => {
  const menuRef = useRef(null);
  const { viewport } = useThree();
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/static/assets/GuiaMapa.png',
    '/static/assets/GuiaMenu.png',
    '/static/assets/GuiaObjetos.png',
    '/static/assets/GuiaCursor.jpg',
  ];

  const showNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <group ref={menuRef}>
      <mesh>
        {/* Button geometry and material */}
       {/* <meshBasicMaterial color="blue" />*/}
        <Html position={[0, 2, 0]} center>
          <button onClick={openModal}>Ver Guía</button>
        </Html>
      </mesh>
      {showModal && (
        <Html position={[0, 0, 0]} center>
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
  );
};

export default Guia;


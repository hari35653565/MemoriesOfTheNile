import React, { useEffect, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Guia from './Guia';

const Menu = () => {
  const menuRef = useRef(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isMusicActive, setMusicActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        setPopupVisible((prevVisible) => !prevVisible); // Invert the visibility state
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleToggleMusic = () => {
    setMusicActive(!isMusicActive);
  };

  const handleClose = () => {
    setPopupVisible(false);
  };

  const { viewport } = useThree();

  if (!isPopupVisible) {
    return null;
  }

  return (
    <mesh>
    <Html
      position={[viewport.width / 2, viewport.height / 2]}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial',
        textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 999,
        backgroundColor: 'orange',
        width: '350px', // Increase the width to make it bigger
          }}
    >
        <div style={{ margin:'0.5cm'}}>
        <h2>Menú</h2>
      <button onClick={handleToggleMusic}>
        {isMusicActive ? 'Desactivar música' : 'Activar música'}
      </button>
      <button onClick={handleClose}>Cerrar</button> {/* Added a close button */}
           <img
        src="/static/assets/mapa.jpg"
        alt="Menu Image"
        style={{ marginTop: '20px', width: '100%' }}
      />

        </div>
        
    </Html>
     
    </mesh>
  );
};

export default Menu;

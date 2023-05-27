import React, { useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Row from "react-bootstrap/Row";

const Menu = ({ onClose, changeCameraPosition }) => {
    const menuRef = useRef(null);
    const { viewport } = useThree();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                event.preventDefault();
                onClose();
            }
            };
        
            document.addEventListener('keydown', handleKeyDown);
        
            return () => {
            document.removeEventListener('keydown', handleKeyDown);
            };
        }, [onClose]);

    return (
        <group ref={menuRef}>
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
      <button onClick={onClose}>Cerrar</button> {/* Added a close button */}
{

                        <div className="background-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/assets/mapa.jpg)` }} >
                            <div className="icon-row">
                                <div className="icon" onClick={() => changeCameraPosition(0)}>
                                    <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/icon.png`} />
                                </div>
                                <div className="icon" onClick={() => changeCameraPosition(1)}>
                                    <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/icon.png`} />
                                </div>
                            </div>
                            <div className="icon-row">
                            <div className="icon" onClick={() => changeCameraPosition(2)}>
                                    <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/icon.png`} />
                                </div>
                                <div className="icon" onClick={() => changeCameraPosition(3)}>
                                    <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/icon.png`} />
                                </div>
                            </div>
                            </div>
        }

    </div>
{/*
                    <div className="menu">
                    <div className="menu-container">
                        <div className="mapa-container">
                        <div className="background-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/assets/mapa.jpg)` }} >
                            <div className="icon-row">
                                <div className="icon" onClick={() => changeCameraPosition(0)}>
                                    Icon 1
                                </div>
                                <div className="icon" onClick={() => changeCameraPosition(1)}>
                                    <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/icon.png`} />
                                </div>
                            </div>
                            <div className="icon-row">
                            <div className="icon" onClick={() => changeCameraPosition(2)}>
                                    <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/icon.png`} />
                                </div>
                                <div className="icon" onClick={() => changeCameraPosition(3)}>
                                    Icon 4
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
        */}
                
            
            </Html>
        </mesh>
        </group>
    );
    };

    export default Menu;

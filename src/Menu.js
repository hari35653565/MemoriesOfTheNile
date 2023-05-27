import React, { useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

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
            <planeBufferGeometry args={[2, 2]} />
            <meshBasicMaterial color="transparent" />
            <Html position={[0, 0, 0]} center>
                {
                    <div className="menu">
                    <div className="menu-container">
                        <div className="menu-items">
                            <div onClick={onClose}>Cerrar Menu</div>
                            <div onClick={onClose}>Guia</div>
                        </div>
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
                }
            
            </Html>
        </mesh>
        </group>
    );
    };

    export default Menu;

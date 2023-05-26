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
                        <div className="mapa-container">
                        <div className="background-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/assets/mapa.jpg)` }} >
                            <div className="icon-row">
                                <div className="icon" onClick={() => changeCameraPosition(0)}>Icon 1</div>
                                <div className="icon" onClick={() => changeCameraPosition(1)}>Icon 2</div>
                            </div>
                            <div className="icon-row">
                                <div className="icon" onClick={() => changeCameraPosition(2)}>Icon 3</div>
                                <div className="icon" onClick={() => changeCameraPosition(3)}>Icon 4</div>
                            </div>
                            </div>
                        </div>
                        <div className="menu-items">
                        <div onClick={onClose}>Menu Item 1</div>
                        <div onClick={onClose}>Menu Item 2</div>
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

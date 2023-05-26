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
/*
    const menuStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    };

    const menuItemStyle = {
        // Styling for each menu item
        color: '#FFF',
        fontSize: '18px',
        padding: '10px',
        cursor: 'pointer',
    };
*/
    const handleIconClick = (iconIndex) => {
        // Placeholder positions for camera position based on the clicked icon
        const positions = [
          [5, 0, 0],   // Icon 1 position
          [0, 10, 0],  // Icon 2 position
          [0, 0, 5],   // Icon 3 position
          [-5, 0, 0],  // Icon 4 position
        ];
    
        // Call the changeCameraPosition function from Experience component
        changeCameraPosition(iconIndex);
    
        // Close the menu
        onClose();
      };

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

          {
             /*
            <div className="menu-container">
                <div className="menu-items" onClick={onClose}>
                Cerrar Menu
                </div>
                <div className="menu-items" onClick={onClose}>
                Menu Item 2
                </div>
                <div className="menu-items" onClick={() => handleIconClick(0)}>
                Icon 1
                </div>
                <div className="menu-items" onClick={() => handleIconClick(1)}>
                Icon 2
                </div>
                <div className="menu-items" onClick={() => handleIconClick(2)}>
                Icon 3
                </div>
                <div className="menu-items" onClick={() => handleIconClick(3)}>
                Icon 4
                </div>
                <Mapa changeCameraPosition={changeCameraPosition} />
            </div>
            */
          }
            
            </Html>
        </mesh>
        </group>
    );
    };

    export default Menu;

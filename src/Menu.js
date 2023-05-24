import React, { useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Menu = ({ onClose }) => {
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

    return (
        <group ref={menuRef}>
        <mesh>
            <planeBufferGeometry args={[2, 2]} />
            <meshBasicMaterial color="transparent" />
            <Html position={[0, 0, 0]} center>
            <div style={menuStyle}>
                <div style={menuItemStyle} onClick={onClose}>
                Cerrar Menu
                </div>
                <div style={menuItemStyle} onClick={onClose}>
                Menu Item 2
                </div>
                {/* Add more menu items */}
            </div>
            </Html>
        </mesh>
        </group>
    );
    };

    export default Menu;

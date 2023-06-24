import React from 'react';
import {useGLTF} from '@react-three/drei';
export default function UMC() {

    // Modelo del Dragón Alado de Ra
    const nodes  = useGLTF('./static/dioses/ultra_mega_chicken.glb');

    return (
        <group>

            {/* Estructura del modelo y sus coordenadas */}
            <group name={"Ultra Mega Chicken"} >
                <primitive
                    object={nodes.scene}
                    position={[-18, 7, -5]}
                    rotation={[Math.PI/4, 0 , 0]}
                    scale={20}

                />
            </group>

        </group>
    );
}

useGLTF.preload("./static/dioses/ultra_mega_chicken.glb");
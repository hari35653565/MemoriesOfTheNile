import React from 'react';
import { useGLTF } from '@react-three/drei'

export default function Lobby()
{
    const nodes = useGLTF("./static/lobby_temple.glb"); 
    const map= useGLTF("./static/map_structure.glb");

    return (
      <group >
        <primitive object={nodes.nodes.Plane001} position-y={-1.03} scale={0.5} position-x={8} position-z={0.03}/>
        
        <primitive name={"map structure"} object={map.scene} position-y={-0.7} scale={0.4} position-x={7.8}/>


        

      </group>
    );
}

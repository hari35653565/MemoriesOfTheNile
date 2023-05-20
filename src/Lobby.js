import React from 'react';
import { useGLTF } from '@react-three/drei'

export default function Lobby()
{
    const nodes = useGLTF("./static/lobby_temple.glb");
    const floor= useGLTF("./static/piramidi_egitto.glb"); 
    const map= useGLTF("./static/map_structure.glb");
    const statue= useGLTF("./static/statue_of_ramesses_iii.glb");
    return (
      <group >
        <primitive object={nodes.scene} position-y={-1.03} scale={0.005} position-x={16}/>
        <primitive name={"arena1"} object={floor.nodes.Cube} position-x={8} position-y={-1.25} rotation-x={Math.PI * (-0.5)} />
        <primitive name={"map structure"} object={map.scene} position-y={-0.7} scale={0.4} position-x={7.8}/>
        <primitive name={"statue"} object={statue.scene} position-y={-0.6} scale={0.08} position-x={7.8} position-z={-2.9}/>

        

      </group>
    );
}

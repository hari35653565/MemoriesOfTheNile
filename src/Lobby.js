import React from 'react';
import { useGLTF } from '@react-three/drei'

export default function Lobby()
{
    const nodes = useGLTF("./static/lobby_temple.glb");

    const floor= useGLTF("./static/piramidi_egitto.glb") 
    console.log(floor.nodes.Cube);
    return (
      <group >
        <primitive object={nodes.scene} position-y={-1.03} scale={0.005} position-x={16}/>
        <primitive name={"arena1"} object={floor.nodes.Cube} position-x={8} position-y={-1.03} rotation-x={Math.PI * (-0.5)} />


        

      </group>
    );
}

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Intro() {
  const nodes = useGLTF("/static/piramidi_egitto.glb");

  return (
    <group position-y={-1.03} rotation-x={Math.PI * 0.03} scale={6} position-x={-5}>
      {/* <primitive object={nodes.scene} data-testid='primitive' /> PARA EL TEST*/} 
      <primitive object={nodes.scene}/>
    </group>
  );
}





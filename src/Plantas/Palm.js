import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Palm(props) {
  const { nodes, materials } = useGLTF("./static/palm.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Date_Pa0.geometry}
        material={materials.Bottom_T}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Date_Pa1.geometry}
        material={materials.Bottom_T}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/palm.glb");
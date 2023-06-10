
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Tree(props) {
  const { nodes, materials } = useGLTF("./static/tree1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={materials.Trank_bark1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_1.geometry}
        material={materials.DB2X2_L02}
      />
    </group>
  );
}

useGLTF.preload("/tree1.glb");
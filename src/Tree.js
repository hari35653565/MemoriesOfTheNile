
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Tree(props) {
  const { nodes, materials } = useGLTF("./static/tree.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_polySurface1_g1_g2_polySurface1.geometry}
        material={materials.polySurface1SG1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_polySurface1_g1_polySurface1.geometry}
        material={materials.Trank_bark}
      />
    </group>
  );
}

useGLTF.preload("/tree.glb");
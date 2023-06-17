
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Bush(props) {
  const { nodes, materials } = useGLTF("./static/bush1.glb");
  return (

    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_1.geometry}
          material={materials.Branch0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_1_1.geometry}
          material={materials.Branch1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage001.geometry}
        material={materials["Material #46"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/bush1.glb");
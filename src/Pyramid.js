import { useAnimations, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

export default function Pyramid(props)
{
    const { nodes, materials } = useGLTF("./static/the_great_pyramid_of_giza.glb");
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow 
            receiveShadow
            geometry={nodes["mat-0"].geometry}
            material={materials["mat-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["mat-0_1"].geometry}
            material={materials["mat-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["mat-0_2"].geometry}
            material={materials["mat-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["mat-0_3"].geometry}
            material={materials["mat-0"]}
          />
        </group>
      </group>
    );
}

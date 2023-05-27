import React from 'react';
import { useGLTF} from '@react-three/drei'
import { useThree} from "@react-three/fiber"
import { useRef} from "react";

export default function Lobby()
{
    const nodes = useGLTF("./static/lobby_temple.glb"); 
    const map= useGLTF("./static/map_structure.glb");
    let flag = true;
    const { camera } = useThree();
    const cameraRef = useRef(camera);

    const event=()=>{
      if(flag==true){
        cameraRef.current.position.set(9.5,-0.7,0.5);    
      
        flag= false;
      }
    }
    
    return (
      <group >
        <primitive object={nodes.nodes.Plane001} position-y={-1} scale={0.5} position-x={8} position-z={0.03} onClick={event}/>
        <primitive name={"map structure"} object={map.scene} position-y={-0.7} scale={0.4} position-x={8}/>
        

      </group>
    );
}

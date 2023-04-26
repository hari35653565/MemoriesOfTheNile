 /**
  * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
  * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
  * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
  * React three drei: https://github.com/pmndrs/drei
  * Three.js: https://threejs.org/docs/
  * 
*/

import { Center, OrbitControls, PointerLockControls, PresentationControls, Text, Float } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import { useRef } from "react";
import { Perf } from 'r3f-perf'

export function Experience(){
     
    return <>
    <Perf position="top-left" />
    <OrbitControls makeDefault />

    <directionalLight position={[1, 2, 3]} intensity={1.5} />
    <ambientLight intensity={0.5} />
    
    <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={30}>
        <planeGeometry />
        <meshStandardMaterial color="orange" />
    </mesh>

    <Float speed={5}>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={1}
                color="#964B00"
                position-y={1}
                maxWidth={8}
                textAlign="center"
            >
                Memory of the Nile
            </Text>
        </Float>

    </>
}
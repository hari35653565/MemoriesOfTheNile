
import React from "react";
import { OrbitControls, Text, Float, PointerLockControls, useHelper } from "@react-three/drei";
import { useThree, useFrame} from "@react-three/fiber"
import { useRef, useState, useEffect } from "react";
import { SpotLightHelper } from 'three';
import * as THREE from 'three';
import  Skybox  from "./Skybox";

export function Manual() {
    const controlsRef = useRef();

  const { camera } = useThree();
  const planeRef = useRef();
{/*
  useFrame(() => {
    const rotationSpeed = 0.05; // Velocidad 
    camera.position.x = Math.cos(rotationSpeed * performance.now() * 0.001) * 10;
    camera.position.z = Math.sin(rotationSpeed * performance.now() * 0.001) * 10;
    camera.lookAt(0, 0, 0);
    controlsRef.current.update(); // Actualiza los controles de órbita

  });*/}
  useFrame(() => {
    const rotationSpeed = 0.05; // Velocidad de rotación ajustable
    camera.position.x = Math.cos(rotationSpeed * performance.now() * 0.001) * 10;
    camera.position.z = Math.sin(rotationSpeed * performance.now() * 0.001) * 10;
    const cameraPosition = camera.position.clone();
    const plane = planeRef.current;

    // Orientar el plano hacia la cámara
    plane.lookAt(cameraPosition);

    controlsRef.current.update(); // Actualiza los controles de órbita
  });
  
    return (
      <>
        <Skybox />
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableRotate={false}
        />

        <mesh ref={planeRef} position={[0,0,0]}>

        <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={1.2}
                color="#964B00"
                position-y={6}
                maxWidth={40}
                textAlign="center"
                anchorY="middle"
            >
                welcome to memories of the Nile
          </Text>
          <planeGeometry args={[20, 10]} />
          
          <meshBasicMaterial
            color="Black"
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          />  
        </mesh>

        {/* Otras componentes y elementos adicionales */}
      </>
    );
    
}
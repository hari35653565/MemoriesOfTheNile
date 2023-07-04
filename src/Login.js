
import React from "react";
import { OrbitControls, Text, Float, PointerLockControls, useHelper } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react";
import { SpotLightHelper } from 'three';

import  Skybox  from "./Skybox";
import  {Canvas}  from "@react-three/fiber";

export function Login() {
    const controlsRef = useRef();

  const { camera } = useThree();

  useFrame((state) => {
    // Girar la cámara horizontalmente
    const rotationSpeed = 0.02; // Velocidad de rotación
    camera.position.x += rotationSpeed;
    camera.lookAt(0, 0, 0);
  });
  
    return (
        <>
        <Skybox />
        <OrbitControls ref={controlsRef} enablePan={false} enableRotate={false} />
      {/* Otras componentes y elementos adicionales */}
        </>
        
      );
    
}
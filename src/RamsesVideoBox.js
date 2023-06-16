import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { Vector2 } from 'three';

import * as THREE from 'three';
import videom from './video/videoRamses.mp4';

import ramses1 from './imagenes/ramses1.png';
import ramses2 from './imagenes/ramses2.png';
import ramses3 from './imagenes/ramses3.png';
import ramses4 from './imagenes/ramses4.png';
import ramses5 from './imagenes/ramses5.jpg';
import ramses6 from './imagenes/ramses6.png';
import ramses7 from './imagenes/ramses7.jpg';
import ramses8 from './imagenes/ramses8.jpg';
import ramses9 from './imagenes/ramses9.png';
import ramses10 from './imagenes/ramses10.jpeg';
import ramses11 from './imagenes/ramses11.png';
import ramses12 from './imagenes/ramses12.jpg';

import { VideoTexture } from 'three';

export default function RamsesVideoBox() {

  const [imagenIndex, setImagenIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const raycaster = new THREE.Raycaster();
  const mouse = new Vector2();
  const { camera, scene } = useThree();

  const imagenes = [ramses1, ramses2, ramses3, ramses4, ramses5, ramses6, ramses7, ramses8, ramses9, ramses10, ramses11, ramses12];
  const imagenUrl = imagenes[imagenIndex];

  const texture = useMemo(() => useLoader(THREE.TextureLoader, imagenUrl), [imagenUrl]);

  const pasarMouse = (event) => {

    setIsLoading(true);

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    const intersectedObject = intersects[0]?.object;

    if (intersectedObject && intersectedObject.name === 'wall2') {
      setImagenIndex((imagenIndex + 1) % imagenes.length);
    }
  };


  const [video] = useState(() => document.createElement('video'));
  useEffect(() => {
    video.src = videom;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
  }, [video]);



  function handleClick() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  const videoTexture = useMemo(() => new VideoTexture(video), [video]);



  return (
    <group >

      <mesh receiveShadow={true} position={[-55, -0.2, 21.5]}  onClick={handleClick} name="wall1">


        <boxGeometry args={[0.25, 4, 7.86]} />
        <meshStandardMaterial map={videoTexture} />
      </mesh>

      <mesh receiveShadow={true} position={[-55, -0.2, 8]} rotation-x={-Math.PI * 0.5} onPointerOver={pasarMouse} name="wall2">
        <boxGeometry args={[0.25, 7.86, 4]} />
        <meshStandardMaterial map={texture} shouldUpdate={true} />
      </mesh>

    </group>
  );
}

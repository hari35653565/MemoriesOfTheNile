import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { Vector2 } from 'three';

import * as THREE from 'three';
import videom from './video/videoRamses.mp4';

import { VideoTexture } from 'three';

export default function RamsesVideoBox()
{

  const [isLoading, setIsLoading] = useState(false);
  const raycaster = new THREE.Raycaster();
  const mouse = new Vector2();
  const { camera, scene } = useThree();

  //const texture = useMemo(() => useLoader(THREE.TextureLoader, imagenUrl), [imagenUrl]);



  const [video] = useState(() => document.createElement('video'));
  useEffect(() => {
    video.src = videom;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    //video.play();
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

      <mesh receiveShadow={true} position={[-55, -0.2, 36]} rotation={[190, Math.PI / 90, 0]} onClick={handleClick} name="wall1">


        <boxGeometry args={[0.25, 8.14, 4]} />
        <meshStandardMaterial map={videoTexture} />
      </mesh>

    </group>
  );
  }

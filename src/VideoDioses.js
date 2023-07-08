import React, { useState, useEffect, useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { VideoTexture } from 'three';

import videom from './video/videoDioses.mp4';


export default function VideoDioses() {

  const [isLoading, setIsLoading] = useState(false);
  const [video] = useState(() => document.createElement('video'));

  useEffect(() => {
    video.src = videom;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = false;
  }, [video]);

  const videoTexture = useMemo(() => new VideoTexture(video), [video]);

  function handleClick() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }


  return (
    <mesh receiveShadow={true} castShadow={true} onClick={handleClick}>
      <planeGeometry args={[2.89, 1.89]} />
      <meshStandardMaterial side={THREE.DoubleSide} map={videoTexture} />
    </mesh>
  );
}
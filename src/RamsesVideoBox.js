import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import videom from './video/videoRamses.mp4';

import { VideoTexture } from 'three';

export default function RamsesVideoBox() {

  const [video] = useState(() => document.createElement('video'));
  useEffect(() => {
    video.src = videom;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = false;
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

      <mesh receiveShadow={true} position={[15, 0, 2]} rotation-y={-Math.PI * 0.5} onClick={handleClick} name="wall-video">
        <boxGeometry args={[0.05, 4, 7.86]} />
        <meshStandardMaterial map={videoTexture} />
      </mesh>

    </group>
  );
}

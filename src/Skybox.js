import React, { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { CubeTextureLoader } from 'three';

const Skybox = () => {
    const { scene } = useThree()
    const path = "textures/skybox/";
    const format = '.png';

    const urls = [
        '1', '2',
        '3', '4',
        '5', '6'
    ].map((dir) => `${path}${dir}${format}`);

    useEffect(() => {
        new THREE.CubeTextureLoader().load(urls, (texture) => {
            // Una vez que las texturas estén cargadas, establece el fondo de la escena como la textura del cubo
            scene.background = texture;
        });
    }, [scene, urls]);

    return null;
}

export default Skybox


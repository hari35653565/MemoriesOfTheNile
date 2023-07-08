import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';

import RamsesVideoBox from './RamsesVideoBox';
import RamsesInfoBox from './RamsesInfoBox';
import Button from 'react-bootstrap/Button';
import { MeshBasicMaterial, TextureLoader } from 'three';



export default function Ramses() {

    // Modelo de Ramsés
    const nodes = useGLTF('./static/statue_of_ramesses_iii.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [verVideo, setVerVideo] = useState(false);
    const [verInfo, setVerInfo] = useState(false);
    const [botonInfo, setbotonInfo] = useState(true);
    const [botonVideo, setbotonVideo] = useState(true);
    const [botonNoInfo, setbotonNoInfo] = useState(false);
    const [botonNoVideo, setbotonNoVideo] = useState(false);


    const textureLoader = new TextureLoader();
    const textureVerVideoIcon = textureLoader.load('static/assets/reproductordevideo.png');
    const materialVideoGuiaIcon = new MeshBasicMaterial({ map: textureVerVideoIcon, transparent: true });


    const handleVerVideo = () => {
        setVerVideo(true);
        setbotonVideo(false);
        setbotonNoVideo(true);
    };

    const handleNOVerVideo = () => {
        setVerVideo(false);
        setbotonVideo(true);
        setbotonNoVideo(false);
    };

    const handleVerInfo = () => {
        setVerInfo(true);
        setbotonInfo(false);
        setbotonNoInfo(true);
    };

    const handleNOVerInfo = () => {
        setVerInfo(false);
        setbotonInfo(true);
        setbotonNoInfo(false);
    };

    return (
        <group>

            {/* Estructura de Ramses sus coordenadas */}
            <group name={"Ramses"}>

                {/* Coordenadas de  Ramses */}
                <primitive
                    object={nodes.scene}
                    position={[15, -0.5, -3]}
                    scale={0.3}
                //onClick={handleClick}

                />


                {botonInfo && (<group onClick={handleVerInfo}>
                    <mesh position={[18, 0, -3]}>
                        <boxGeometry args={[1.5, 0.8, 0.05]} />
                        <meshBasicMaterial color="violet" transparent opacity={0.5} />
                    </mesh>
                    <Text position={[18, 0, -2.9]} fontSize={0.3} color="black" >
                        {'Ver Info'}
                    </Text>

                </group>)}

                {botonVideo && (<group onClick={handleVerVideo}>
                    <mesh position={[18, -1, -3]}>
                        <boxGeometry args={[1.5, 0.8, 0.05]} />
                        <meshBasicMaterial color="violet" transparent opacity={0.5} />
                    </mesh>
                    <Text position={[18, -1, -2.9]} fontSize={0.3} color="black" >
                        {'Ver video'}
                    </Text>
                </group>)}

                {botonNoInfo && (<group onClick={handleNOVerInfo}>
                    <mesh position={[19.2, 0, 2]}>
                        <boxGeometry args={[1.2, 0.5, 0.05]} />
                        <meshBasicMaterial color="violet" transparent opacity={0.5} />
                    </mesh>
                    <Text position={[19.2, 0, 2.05]} fontSize={0.15} color="black" >
                        {'Ocultar Info'}
                    </Text>
                </group>)}

                {botonNoVideo && (<group onClick={handleNOVerVideo}>
                    <mesh position={[19.5, 0, 2]}>
                        <boxGeometry args={[0.8, 0.5, 0.05]} />
                        <meshBasicMaterial color="violet" transparent opacity={0.5} />
                    </mesh>
                    <Text position={[19.5, 0, 2.05]} fontSize={0.15} color="black" >
                        {'Ocultar\n video'}
                    </Text>
                </group>)}


                {verVideo && <RamsesVideoBox />}

                {verInfo && (
                    <RamsesInfoBox></RamsesInfoBox>

                )}

            </group>
        </group>
    );
}

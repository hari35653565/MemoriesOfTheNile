import React, { useState } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from './PopupWindow';
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
    const [ramsesInfo, setRamsesInfo] = useState(false);
    const [showVideo, setShowVideo] = useState(false);


    const textureLoader = new TextureLoader();
    const textureVerVideoIcon = textureLoader.load('static/assets/iconovervideo.png');
    const materialVideoGuiaIcon = new MeshBasicMaterial({ map: textureVerVideoIcon, transparent: true });


    const handleVerVideo = () => {
        setVerVideo(true);
    };

    const handleNOVerVideo = () => {
        setVerVideo(false);
    };

    const handleVerInfo = () => {
        setVerInfo(true);
    };

    const handleNOVerInfo = () => {
        setVerInfo(false);
    };

    return (
        <group>

            {/* Estructura de Ramses sus coordenadas */}
            <group name={"Ramses"} onContextMenu={event}>

                {/* Coordenadas de  Ramses */}
                <primitive
                    object={nodes.scene}
                    position={[15, -0.5, -3]}
                    scale={0.3}
                //onClick={handleClick}

                />


                    <mesh position={[16, 5.4, -3]} material={materialVideoGuiaIcon}>
                        <Html>
                            <Button name="verV" variant="primary" onClick={handleVerVideo}>
                                Video
                            </Button>
                        </Html>

                    </mesh>


                <group>
                    <mesh position={[18, 5.4, -3]}>
                        <Html>
                            <Button name="quitarV" variant="primary" onClick={handleNOVerVideo}>
                                Quitar Video
                            </Button>
                        </Html>
                    </mesh>
                </group>

                <group>
                    <mesh position={[10, 5.4, -3]}>
                        <Html>
                            <Button name="verI" variant="primary" onClick={handleVerInfo}>
                                Ver info
                            </Button>
                        </Html>
                    </mesh>
                </group>

                <group>
                    <mesh position={[12, 5.4, -3]}>
                        <Html>
                            <Button name="quitarI"  variant="primary" onClick={handleNOVerInfo}>
                                NO Ver info
                            </Button>
                        </Html>
                    </mesh>
                </group>


                {verVideo &&  <RamsesVideoBox />}

                {verInfo && (
                    <RamsesInfoBox></RamsesInfoBox>

                )}

            </group>

        </group>
    );
}

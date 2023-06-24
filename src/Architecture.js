import React, { useState, useEffect } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from './PopupWindow';

export default function Architecture() {

    // Modelo del templo Lúxor
    const nodes = useGLTF('./static/1Luxor-temple.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [luxorText, setLuxorText] = useState(false);
    const [luxorInfo, setLuxorInfo] = useState(false);
    const [flagEnter, setFlagEnter] = useState(false);
    const [showSalir, setShowSalir] = useState(false);
    const nameObj2 = "PILONOS";
    const obj2 = "Enorme obelisco, que simboliza un rayo de sol petrificado, sorprende al visitante. Su altura de 25 m casi obliga a mirar hacia arriba";


    /* Evento al hacer click derecho: Lúxor y direcciona hacia su interior */
    const event = (e) => {
        if(flagEnter===false){
        cameraRef.current.position.set(-18, -0.5, -3.5);
        cameraRef.current.rotation.y=Math.PI
        setLuxorText(true);

        setTimeout(() => {
            setLuxorText(false);
        }, 1500);
        setFlagEnter(true)
        setShowSalir(true)
    }
    };
    
    /*Evento al hacer click sobre el obelisco*/

    const eventStatue = (e) => {
        e.stopPropagation = true;
        setLuxorInfo(true);

    }

    /* Evento para cerrar el informativo */
    const closePopup1 = () => {
        setLuxorInfo(false);
    };

    /* evento salir del templo */
    const salirTemplo=()=>{
        if(flagEnter===true){
            cameraRef.current.position.set(-18, 0, 5);
            cameraRef.current.rotation.y = Math.PI;
            setFlagEnter(false)
            setShowSalir(false)
        }

    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            var currentPosition = cameraRef.current.position.toArray().join(',');
            switch (event.code) {
                case 'ArrowRight':          
                    switch (currentPosition) {
                        case '-18,-0.5,-3.5': //posicion dentro del luxor
                            cameraRef.current.position.set(-21, -0.5, -4.1); //posicion Bastet
                            cameraRef.current.rotation.y = Math.PI / 2;
                            break
                        case '-21,-0.5,-4.1': //posicion Bastet
                            cameraRef.current.position.set(-19.5, -0.5, -7); //posicion Ra
                            cameraRef.current.rotation.y = Math.PI;
                            break
                        case '-19.5,-0.5,-7': //posicion Ra
                            cameraRef.current.position.set(-18, -0.5, -8); //posicion Clases
                            cameraRef.current.rotation.y = Math.PI;
                            break
                        case '-18,-0.5,-8': //posicion Clases
                            cameraRef.current.position.set(-16.4, -0.8, -7); //posicion Anubis
                            cameraRef.current.rotation.y = Math.PI ;
                            break
                        case '-16.4,-0.8,-7': //posicion Anubis
                            cameraRef.current.position.set(-15, -0.5, -3.65); //posicion Osiris
                            cameraRef.current.rotation.y = -1*Math.PI/2;
                            break
                        case '-15,-0.5,-3.65': //posicion Osiris
                            cameraRef.current.position.set(-18, -0.5, -3.5); //posicion inicial
                            cameraRef.current.rotation.y = Math.PI;
                            break   


                    }

                    break;
                case 'ArrowLeft':
                    switch (currentPosition) {
                        case '-19.5,-0.5,-7': //posicion dentro del Ra
                            cameraRef.current.position.set(-21, -0.5, -4.1); //posicion Bastet
                            cameraRef.current.rotation.y = Math.PI / 2;
                            break
                        case '-18,-0.5,-8': //posicion Clases
                            cameraRef.current.position.set(-19.5, -0.5, -7); //posicion Ra
                            cameraRef.current.rotation.y = Math.PI;
                            break
                        case '-16.4,-0.8,-7': //posicion Anubis
                            cameraRef.current.position.set(-18, -0.5, -8); //posicion Clases
                            cameraRef.current.rotation.y = Math.PI;
                            break
                        case '-15,-0.5,-3.65': //posicion Osiris
                            cameraRef.current.position.set(-16.4, -0.8, -7); //posicion Anubis
                            cameraRef.current.rotation.y = Math.PI ;
                            break
                        case '-18,-0.5,-3.5': //posicion inicial
                            cameraRef.current.position.set(-15, -0.5, -3.65); //posicion Osiris
                            cameraRef.current.rotation.y = -1*Math.PI/2;
                            break
                        case '-21,-0.5,-4.1': //posicion Bastet
                            cameraRef.current.position.set(-18, -0.5, -3.5); //posicion inicial
                            cameraRef.current.rotation.y = Math.PI;
                            break 
        

                    }
                    break;

            }
        };


        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <group>

            {/* Estructura del templo y sus coordenadas */}
            <group name={"Egyptian temple"} onClick={event}>
                <primitive
                    object={nodes.scene}
                    position={[-10, -2, -2]}
                    rotation-y={Math.PI / 2}
                    scale={0.1}

                />

                {/* Texto indica Lúxor*/}
                {luxorText && (
                    <Text position={[-20, -2, 0.5]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white">
                        Estás en Lúxor
                    </Text>
                )}
            </group>
            {/* objeto salir del templo */}
            {showSalir && (
                <group onClick={salirTemplo}>
                    <Text position={[-18, -0.5, -2]} fontSize={0.06} color="black" rotation-y={Math.PI}>
                        {'Salir'}
                    </Text>
                </group>
            )}

        </group>
    );
}

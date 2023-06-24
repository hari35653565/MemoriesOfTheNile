import React, { useState, useEffect } from 'react';
import { Float, Html, useGLTF, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PopupWindow from './PopupWindow';

export default function Templo2() {

    // Modelo del templo Lúxor
    const nodes = useGLTF('./static/1Palacio-egipcio.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [palacioText, setPalacioText] = useState(false);
    const [palacioInfo, setPalacioInfo] = useState(false);
    const [showSalir, setShowSalir] = useState(false);
    const [flagEnter, setFlagEnter] = useState(false);
    const jeroglíficos = "PALACIO FARAON";
    const obj2 = ""

    /* Evento al hacer click en el palacio e ir a este */
    const event = () => {
        if(flagEnter===false){
        cameraRef.current.position.set(-40, 0, -5);
        //cameraRef.current.rotation.y=Math.PI
        setPalacioText(true);

        setTimeout(() => {
            setPalacioText(false);
        }, 1500);
        setFlagEnter(true)
        setShowSalir(true)
    }
    };

    /*Evento al hacer click sobre el jeroglíficos*/

    const eventStatue = (e) => {
        e.stopPropagation = true;
        setPalacioInfo(true);

    }

    /* Evento para cerrar el informativo */
    const closePopup1 = () => {
        setPalacioInfo(false);
    };
    /* Evento del teclado, flechas derecha e izquierda*/
    useEffect(() => {
        const handleKeyDown = (event) => {
            var currentPosition = cameraRef.current.position.toArray().join(',');
            switch (event.code) {
                case 'ArrowRight':          
                    switch (currentPosition) {
                        case '-40,0,-5': //posicion dentro del templo2
                            cameraRef.current.position.set(-39.5, -0.8, -5); //posicion escarabajo
                            cameraRef.current.rotation.y = 3 * Math.PI / 2;
                            break
                        case '-39.5,-0.8,-5': //posicion escarabajo
                            cameraRef.current.position.set(-40, 0, -9); //vista afuera
                            cameraRef.current.rotation.y = Math.PI;
                            break
                        case '-40,0,-9':
                            cameraRef.current.position.set(-41, -0.8, -8); //posicion gato
                            cameraRef.current.rotation.y = Math.PI / 2;
                            break
                        case '-41,-0.8,-8': //posicion gato
                            cameraRef.current.position.set(-40.5, -0.8, -5); //posicion cocodrilo
                            break
                        case '-40.5,-0.8,-5': //posicion cocodrilo
                            cameraRef.current.position.set(-40, 0, -5); //posicion inicial dentro del templo
                            cameraRef.current.rotation.y = Math.PI * 2;
                            break
 


                    }

                    break;
                case 'ArrowLeft':
                    switch (currentPosition) {

                        case '-40,0,-5':
                            cameraRef.current.position.set(-40.5, -0.8, -5); //posicion cocodrilo
                            cameraRef.current.rotation.y = Math.PI / 2;
                            break

                        case '-40,0,-9': //posicion dentro del templo2
                            cameraRef.current.position.set(-39.5, -0.8, -5); //posicion escarabajo
                            cameraRef.current.rotation.y = 3*Math.PI / 2;
                            break
                        case '-41,-0.8,-8': //mirando el gato
                            cameraRef.current.position.set(-40, 0, -9); //posicion vista hacia afuera
                            cameraRef.current.rotation.y = Math.PI;
                            break
                        case '-40.5,-0.8,-5': //posicion cocodrilo
                            cameraRef.current.position.set(-41, -0.8, -8); //posicion gato
                            break
                        case '-39.5,-0.8,-5': //posicion escarabajo
                            cameraRef.current.position.set(-40, 0, -5); //posicion  inicial
                            cameraRef.current.rotation.y = Math.PI*2;
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

    /* evento salir del templo2 */
    const salirTemplo=()=>{
        if(flagEnter===true){
            cameraRef.current.position.set(-40, 1, 5);
            cameraRef.current.rotation.y = Math.PI;
            setFlagEnter(false)
            setShowSalir(false)
        }

    }

    return (
        <group>

            {/* Estructura del templo y sus coordenadas */}
            <group name={"Palacio2"} onClick={event}>
                <primitive
                    object={nodes.scene}
                    position={[-40, -1.5, -12]}
                    scale={0.8}

                />

                {/* Texto indica Palacio*/}
                {palacioText && (
                    <Text position={[-40, 1, -6]} fontSize={0.4} rotation-y={Math.PI} color="black" font="./bangers-v20-latin-regular.woff">
                        Palacio de Faraón
                    </Text>
                )}
            </group>

            {/* objeto salir del templo */}
            {showSalir && (
                <group onClick={salirTemplo}>
                    <Text position={[-40, -0.1, -8]} fontSize={0.06} color="black" rotation-y={Math.PI}>
                        {'Salir'}
                    </Text>
                </group>
            )}

        </group>
    );
}

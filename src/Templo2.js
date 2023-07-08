import React, { useState, useEffect } from 'react';
import {useGLTF, Text, Image } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';


export default function Templo2() {

    // Modelo del templo Lúxor
    const nodes = useGLTF('./static/1Palacio-egipcio.glb');
    const anfora = useGLTF('./static/anfora.glb');
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const [showPopup1, setShowPopup1] = useState(false);
    const [infoPopup, setInfoPopup] = useState('')
    const [palacioText, setPalacioText] = useState(false);
    const [showSalir, setShowSalir] = useState(false);
    const [flagEnter, setFlagEnter] = useState(false);


    /* Evento al hacer click en el palacio e ir a este */
    const event = (e) => {
        e.stopPropagation();
        if (flagEnter === false) {
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
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0

                            break
                        case '-39.5,-0.8,-5': //posicion escarabajo
                            cameraRef.current.position.set(-39, -0.8, -7); //posicion ibis
                            break
                        case '-39,-0.8,-7':
                            cameraRef.current.position.set(-40, 0, -9); //vista hacia la salida
                            cameraRef.current.rotation.y = Math.PI;
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0
                            break
                        case '-40,0,-9':
                            cameraRef.current.position.set(-41, -0.8, -8); //posicion gato
                            cameraRef.current.rotation.y = Math.PI / 2;
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0
                            break
                        case '-41,-0.8,-8': //posicion gato
                            cameraRef.current.position.set(-40.5, -0.8, -5);
                            break
                        case '-40.5,-0.8,-5': //posicion cocodrilo
                            cameraRef.current.position.set(-40, 0, -5); //posicion inicial dentro del templo
                            cameraRef.current.rotation.y = Math.PI * 2;
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0
                            break



                    }

                    break;
                case 'ArrowLeft':
                    switch (currentPosition) {

                        case '-40,0,-5':
                            cameraRef.current.position.set(-40.5, -0.8, -5); //posicion cocodrilo
                            cameraRef.current.rotation.y = Math.PI / 2;
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0
                            break

                        case '-40,0,-9': //posicion dentro del templo2 hacia la salida
                            cameraRef.current.position.set(-39, -0.8, -7); //posicion ibis
                            cameraRef.current.rotation.y = 3 * Math.PI / 2;
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0
                            break
                        case '-39,-0.8,-7': //posicion ibis
                            cameraRef.current.position.set(-39.5, -0.8, -5); //posicion escarabajo
                            cameraRef.current.rotation.y = 3 * Math.PI / 2;
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0
                            break
                        case '-41,-0.8,-8': //mirando el gato
                            cameraRef.current.position.set(-40, 0, -9); //posicion vista hacia afuera
                            cameraRef.current.rotation.y = Math.PI;
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0
                            break
                        case '-40.5,-0.8,-5': //posicion cocodrilo
                            cameraRef.current.position.set(-41, -0.8, -8); //posicion gato
                            break
                        case '-39.5,-0.8,-5': //posicion escarabajo
                            cameraRef.current.position.set(-40, 0, -5); //posicion  inicial
                            cameraRef.current.rotation.y = Math.PI * 2;
                            cameraRef.current.rotation.x = 0
                            cameraRef.current.rotation.z = 0
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

    /* Evento para pasar a la sala 2 del templo */
    const eventSala2 = (e) => {
        e.stopPropagation();
        cameraRef.current.position.set(-40, 0, -18);
    }
    /* Evento para pasar a la sala principal del templo */
    const eventSala1 = (e) => {
        e.stopPropagation();
        cameraRef.current.position.set(-40, 0, -9);
    }


    /* evento salir del templo2 */
    const salirTemplo = () => {
        if (flagEnter === true) {

            cameraRef.current.position.set(-40, 0, 5);
            cameraRef.current.rotation.y = Math.PI *2;
            cameraRef.current.rotation.x = 0
            cameraRef.current.rotation.z = 0
            setFlagEnter(false)
            setShowSalir(false)
        }

    }

    /*Evento al hacer click imagen */

    const infoUvas = () => {
        setInfoPopup(' FRUTAS Y VERDURAS:\n\n Las casas egipcias poseían pequeños huertos domésticos que producían hortalizas y\n en los jardines de las villas aristocráticas se plantaban árboles frutales.\n Además, en las marismas crecía en abundancia el papiro, que no se usaba sólo para la\n producción del famoso soporte para escritura, sino que también podía consumirse.');
        setShowPopup1(true);
    }

    /*Envento al dar click en la anfora */

    const infoAnfora = () => {
        setInfoPopup('BEBIDAS:\n\n El vino estaba reservado a los ricos, era una bebida de lujo en Egipto, mientras que la\n cerveza fue la bebida nacional, era barata y abundante. Estaba elaborada con trigo o\n cebada y se usaban dátiles, cuyo azúcar aseguraba la fermentación de la bebida.\n La cerveza era vendida en ánforas cerradas con un tapón de paja y de arcilla, o con\n un plato pequeño y yeso');
        setShowPopup1(true);
    }

    /* Evento para cerrar la ventana emergente  */
    const closePopup = (e) => {
        e.stopPropagation()
        setShowPopup1(false);
    };



    return (
        <group>

            {/* Estructura del templo y sus coordenadas */}
            <group name={"Palacio2"} onClick={event}>
                <primitive
                    object={nodes.scene}
                    position={[-40, -1.6, -12]}
                    scale={0.9}

                />

                {/* Texto indica Palacio*/}
                {palacioText && (
                    <Text position={[-40, 0.5, -8]} fontSize={0.4} color="black" font="./bangers-v20-latin-regular.woff">
                        Palacio de Faraón
                    </Text>
                )}
            </group>


            {/* objeto salir del templo */}
            {showSalir && (
                <group onClick={salirTemplo}>
                    <mesh position={[-40, -0.5, -2.65]}>
                        <boxGeometry args={[1, 2, 0.05]} />
                        <meshBasicMaterial color="black" transparent opacity={0.2} />
                    </mesh>
                    <Text position={[-40, -0.4, -2.6]} fontSize={0.1} color="black" rotation-y={Math.PI}>
                        {'Salir'}
                    </Text>
                </group>
            )}

            <group onClick={eventSala2}>
                <mesh position={[-40, -0.6, -14.7]}>
                    <planeGeometry args={[0.65, 1.65]} />
                    <meshBasicMaterial color="black" transparent opacity={0.2} />
                </mesh>
            </group>

            <group onClick={eventSala1}>
                <mesh position={[-39.98, -0.6, -16.5]}>
                    <boxGeometry args={[0.65, 1.65,0.5]} />
                    <meshBasicMaterial color="black" transparent opacity={0.2} />
                </mesh>
                <Text position={[-39.98, -0.1, -17.3]} fontSize={0.06} color="black" rotation-y={Math.PI}>
                    {'     Sala\n Principal'}
                </Text>
            </group>

            <mesh position={[-40, 0, -22.5]} >

                <planeGeometry args={[2, 4]} />
                <meshBasicMaterial color="black" transparent opacity={0.99} />
            </mesh>

            <Text position={[-40, 0.8, -22.49]} fontSize={0.3} color="white">{'Gastronomia'}</Text>
            <mesh position={[-40, 0, -22.49]}>
                <Image url={'/static/assets/prensadoUva.jpeg'}
                    scale={[1.5, 1, 1]}
                    onClick={infoUvas}
                />
            </mesh>


            <primitive
                object={anfora.scene}
                position={[-41.1, -1, -20.5]}
                scale={0.2}
                onClick={infoAnfora}
            />

            {/* Ventana emergente de información*/}
            {showPopup1 && (
                <group onClick={closePopup}>
                    <mesh position={[-40, 0, -19.3]}>
                        <planeGeometry args={[3, 0.6]} />
                        <meshBasicMaterial color="black" transparent opacity={0.8} />
                    </mesh>
                    <Text position={[-40, 0, -19.29]} fontSize={0.06} color="white" >
                        {infoPopup}
                    </Text>
                </group>
            )}

        </group>
    );
}

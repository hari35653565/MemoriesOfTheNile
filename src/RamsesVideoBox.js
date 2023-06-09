import React, { useEffect} from 'react';
import { Html } from '@react-three/drei';

const RamsesVideoBox = ({ onClick }) => {

    // const handleCloseClick = () => {
    //     onClick();
    //   };

    useEffect(() => {
        // Agregar el event listener para recibir mensajes del iframe
        window.addEventListener('message', handleIframeMessage);

        // Limpiar el event listener al desmontar el componente
        return () => {
          window.removeEventListener('message', handleIframeMessage);
        };
      }, []);

      const handleIframeMessage = (event) => {
        // Comprobar si el mensaje proviene del iframe deseado
        if (event.source === document.querySelector('iframe')) {
          // Comprobar si el mensaje es para cerrar el cuadro de video
          if (event.data === 'closeVideoBox') {
            onClick(); // Llamar a la función onClick para cerrar el cuadro
          }
        }
      };

    return (
        <Html>
            <div

                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '300px',
                    background: '#000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 9999,
                }}
                onClick={onClick}
            >
                <iframe
                    // width="100%"
                    // height="100%"
                    src="https://www.youtube.com/embed/NtMu_1FCowI"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
                </iframe>

                {/* <button
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        padding: '5px 10px',
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={handleCloseClick}
                >
                    Cerrar   </button> */}


            </div>
        </Html>
    );
};

export default RamsesVideoBox;

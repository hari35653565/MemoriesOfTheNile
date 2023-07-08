import React, { useEffect, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import checkImage from './imagenes/check-icon.png'
import Guia from './Guia';

const Menu = ({ onClose, changeCameraPosition, moduleState }) => {
    const menuRef = useRef(null);
    const { viewport } = useThree();
    const [showMapa, setShowMapa] = useState('');
    const [title, setTitle] = useState('Menú');
    const [showModul, setShowModul] = useState('none');


    //variables para confirmar modulos






    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                event.preventDefault();
                onClose();

            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const showModu = () => {
        setShowMapa('none');
        setTitle('Modulos');
        setShowModul('');
    }



    return (
        <group ref={menuRef}>

            <Html
                position={[viewport.width / 2, viewport.height / 2]}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Arial',
                    textAlign: 'center',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 999,
                    backgroundColor: 'orange',
                    width: '500px', // Increase the width to make it bigger
                }}
            >
                <div style={{ margin: '0.5cm' }}>


                    {//Mapa Interactivo
                        <group>
                            <h2>{title}</h2>
                            <div className="background-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/assets/mapa.png)`, display: showMapa }} >
                                <div className="icon-row">
                                    <div className="icon" onClick={(e) => {
                                        e.stopPropagation();
                                        changeCameraPosition(0)
                                    }}>
                                        <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/templo1.png`} style={{
                                            height: 50,
                                            width: 165,
                                            marginRight: 100,
                                            marginTop: 50
                                        }} />
                                    </div>
                                    <div className="icon" onClick={(e) => { e.stopPropagation(); changeCameraPosition(1) }}>
                                        <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/templo2.png`} style={{
                                            height: 57,
                                            width: 152,
                                            marginTop: 46
                                        }} />
                                    </div>
                                </div>
                                <div className="icon-row">
                                    <div className="icon" onClick={(e) => { e.stopPropagation(); changeCameraPosition(2) }}>
                                        <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/esfinge.png`} style={{
                                            height: 60,
                                            width: 150,
                                        }} />
                                    </div>

                                </div>
                                <div className="icon-row" >
                                    <div className="icon" onClick={(e) => { e.stopPropagation(); changeCameraPosition(3) }}>
                                        <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/lobby.png`} style={{
                                            height: 74,
                                            width: 160,
                                            marginRight: 62,
                                            marginLeft: 25,
                                            marginBlockEnd: 40
                                        }} />
                                    </div>
                                    <div className="icon" onClick={(e) => { e.stopPropagation(); changeCameraPosition(4) }}>
                                        <img className="icon-image" src={`${process.env.PUBLIC_URL}/static/assets/ramsess.png`} style={{
                                            height: 80,
                                            width: 40,
                                            marginLeft: 30,
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </group>


                    }

                    {//LISTA MODULOS

                        <div className='background-image' style={{ display: showModul }}>
                            <table>
                                <tr>
                                    <th>Religión</th>
                                    <th></th>
                                    <th>Fauna</th>
                                    <th></th>
                                </tr>

                                <tr>
                                    <td>Ankh</td>
                                    <td>{moduleState.show1 && <img className='checkIMG' src={checkImage} />}</td>
                                    <td>Cocodrilo</td>
                                    <td>{moduleState.show10 && <img className='checkIMG' src={checkImage} />}</td>
                                </tr>
                                <tr>
                                    <td>Bastet</td>
                                    <td>{moduleState.show2 && <img className='checkIMG' src={checkImage} />}</td>
                                    <td>Gato</td>
                                    <td>{moduleState.show11 && <img className='checkIMG' src={checkImage} />}</td>
                                </tr>
                                <tr>
                                    <td>Ra</td>
                                    <td>{moduleState.show3 && <img className='checkIMG' src={checkImage} />}</td>
                                    <td>Ibis</td>
                                    <td>{moduleState.show12 && <img className='checkIMG' src={checkImage} />}</td>
                                </tr>
                                <tr>
                                    <td>Anubis</td>
                                    <td>{moduleState.how4 && <img className='checkIMG' src={checkImage} />}</td>
                                    <td>Escarabajo</td>
                                    <td>{moduleState.show13 && <img className='checkIMG' src={checkImage} />}</td>
                                </tr>
                                <tr>
                                    <td>Osiris</td>
                                    <td>{moduleState.show5 && <img className='checkIMG' src={checkImage} />}</td>
                                </tr>
                                <tr>
                                    <td>Horus</td>
                                    <td>{moduleState.show6 && <img className='checkIMG' src={checkImage} />}</td>
                                </tr>
                                <tr>
                                    <td>Isis</td>
                                    <td>{moduleState.show7 && <img className='checkIMG' src={checkImage} />}</td>
                                </tr>

                                <tr>
                                    <th>Historia</th>
                                    <td></td>
                                    <th>Gastronomía</th>
                                </tr>
                                <tr>
                                    <td>Ramses</td>
                                    <td>{moduleState.show8 && <img className='checkIMG' src={checkImage} />}</td>
                                    <td>Frutas y verduras</td>
                                    <td>{moduleState.show14 && <img className='checkIMG' src={checkImage} />}</td>
                                </tr>
                                <tr><td>Kefrén</td>
                                    <td>{moduleState.show9 && <img className='checkIMG' src={checkImage} />}</td>
                                    <td>Bebidas</td>
                                    <td>{moduleState.show14 && <img className='checkIMG' src={checkImage} />}</td></tr>
                            </table>
                        </div>
                    }
                    <button onClick={onClose}>Cerrar</button> {/* Added a close button */}
                    <button onClick={showModu}>Ver modulos</button>
                </div>




            </Html>

        </group>
    );
};

export default Menu;

import React, { useEffect, useRef, useState } from 'react';
import { Html, Group } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import checkImage from './imagenes/check-icon.png'
import Guia from './Guia';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Menu = ({ onClose, changeCameraPosition, moduleState }) => {
    const menuRef = useRef(null);
    const { viewport } = useThree();
    const [showMapa, setShowMapa] = useState('');
    const [title, setTitle] = useState('Menú');
    const [showModul, setShowModul] = useState('none');
    const history = useNavigate();

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

    const logout = () => {
        history("/");
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

                    <Button variant="primary" onClick={onClose}>Cerrar</Button>
                    <Button variant="secondary" onClick={showModu}>Ver módulos</Button>
                    <Button variant="secondary" onClick={logout}>Cerrar Sesión</Button>
                </div>




            </Html>

        </group>
    );

}
export default Menu;

// import React, { useEffect, useRef, useState } from 'react';
// import { Html, Group } from '@react-three/drei';
// import { useThree } from '@react-three/fiber';
// import checkImage from './imagenes/check-icon.png';
// import Guia from './Guia';
// import { Button, Container, Row, Col, Table } from 'react-bootstrap';
// import { makeStyles } from '@material-ui/core/styles';
// import { TableContainer, Table as MUITable, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

// const useStyles = makeStyles({
//   tableContainer: {
//     margin: '0.5cm',
//     backgroundColor: 'orange',
//     width: '500px',
//   },
//   checkImg: {
//     height: 16,
//     width: 16,
//   },
// });

// const Menu = ({ onClose, changeCameraPosition, moduleState }) => {
//   const menuRef = useRef(null);
//   const { viewport } = useThree();
//   const [showMapa, setShowMapa] = useState('');
//   const [title, setTitle] = useState('Menú');
//   const [showModul, setShowModul] = useState('none');
//   const classes = useStyles();

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.code === 'Space') {
//         event.preventDefault();
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   const showModu = () => {
//     setShowMapa('none');
//     setTitle('Modulos');
//     setShowModul('');
//   };

//   return (
//     <group ref={menuRef}>
//       <Html
//         position={[viewport.width / 2, viewport.height / 2]}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontFamily: 'Arial',
//           textAlign: 'center',
//           position: 'fixed',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 999,
//         }}
//       >
//         <div className={classes.tableContainer}>
//           {showMapa === 'none' && (
//             <TableContainer>
//               <MUITable>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Religión</TableCell>
//                     <TableCell></TableCell>
//                     <TableCell>Fauna</TableCell>
//                     <TableCell></TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>Ankh</TableCell>
//                     <TableCell>{moduleState.show1 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell>Cocodrilo</TableCell>
//                     <TableCell>{moduleState.show10 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Bastet</TableCell>
//                     <TableCell>{moduleState.show2 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell>Gato</TableCell>
//                     <TableCell>{moduleState.show11 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Ra</TableCell>
//                     <TableCell>{moduleState.show3 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell>Ibis</TableCell>
//                     <TableCell>{moduleState.show12 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Anubis</TableCell>
//                     <TableCell>{moduleState.how4 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell>Escarabajo</TableCell>
//                     <TableCell>{moduleState.show13 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Osiris</TableCell>
//                     <TableCell>{moduleState.show5 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell></TableCell>
//                     <TableCell></TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Horus</TableCell>
//                     <TableCell>{moduleState.show6 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell></TableCell>
//                     <TableCell></TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Isis</TableCell>
//                     <TableCell>{moduleState.show7 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell></TableCell>
//                     <TableCell></TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Historia</TableCell>
//                     <TableCell></TableCell>
//                     <TableCell>Gastronomía</TableCell>
//                     <TableCell></TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Ramses</TableCell>
//                     <TableCell>{moduleState.show8 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell>Frutas y verduras</TableCell>
//                     <TableCell>{moduleState.show14 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Kefrén</TableCell>
//                     <TableCell>{moduleState.show9 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                     <TableCell>Bebidas</TableCell>
//                     <TableCell>{moduleState.show14 && <img className={classes.checkImg} src={checkImage} />}</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </MUITable>
//             </TableContainer>
//           )}

//           <Button variant="primary" onClick={onClose}>
//             Cerrar
//           </Button>
//           <Button variant="secondary" onClick={showModu}>
//             Ver módulos
//           </Button>
//         </div>
//       </Html>
//     </group>
//   );
// };

// export default Menu;

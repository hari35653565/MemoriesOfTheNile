// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Container, Row, Col, Spinner } from "react-bootstrap";
// import { Typography } from "@material-ui/core";

// const Loader = () => {
//   const egyptLoading1 ="/static/assets/egyptLoading1.gif";
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Simulación de tiempo de carga
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 2000);
//   }, []);

//   return (
//     <Container className="home">
//       <AnimatePresence>
//         {!isLoaded && (
//           <motion.div
//             className="loading"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <Row className="align-items-center justify-content-center">
//               <Col xs="auto">
//                 <img
//                   src={egyptLoading1}
//                   alt="Loading"
//                   className="custom-loading-image"
//                 />
//               </Col>
//               <Col xs="auto">
//                 <Spinner animation="border" variant="primary" role="status">
//                   <span className="sr-only">Cargando...</span>
//                 </Spinner>
//               </Col>
//             </Row>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {isLoaded && (
//         <motion.div
//           className="content"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <Container>
//             <Row className="justify-content-center">
//               <Col>
//                 <Typography variant="h2" component="h1" align="center" gutterBottom>
//                   Bienvenido a Memories of the Nile
//                 </Typography>
//                 <Typography variant="body1" align="center">
//                   ¡Disfruta del recorrido!
//                 </Typography>
//               </Col>
//             </Row>
//           </Container>
//         </motion.div>
//       )}
//     </Container>
//   );
// };

// export default Loader;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import { Loader } from "@react-three/drei";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const CLoader = ({exp}) => {
  const egyptLoading1 = "/static/assets/egyptLoading1.gif";
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulación de tiempo de carga
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  }, []);

  return (
    <Container className="home">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Row className="align-items-center justify-content-center">
              <Col xs="auto">
                <img
                  src={egyptLoading1}
                  alt="Loading"
                  className="custom-loading-image"
                />
              </Col>
            </Row>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && exp}
    </Container>
  );
};

export default CLoader;




// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Container, Row, Col, Spinner } from 'react-bootstrap';
// import { Typography } from '@material-ui/core';
// import { Loader } from '@react-three/drei';

// const CLoader = () => {
//   const egyptLoading1 = '/static/assets/egyptLoading1.gif';
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     window.addEventListener('load', handleLoad);
//     return () => {
//       window.removeEventListener('load', handleLoad);
//     };
//   }, []);

//   const handleLoad = () => {
//     setIsLoaded(true);
//   };

//   return (
//     <Container className="home">
//       <AnimatePresence>
//         {!isLoaded && (
//           <motion.div
//             className="loading"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <Row className="align-items-center justify-content-center">
//               <Col xs="auto">
//                 <img src={egyptLoading1} alt="Loading" className="custom-loading-image" />
//               </Col>
//               <Col xs="auto">
//                 <Loader />
//               </Col>
//             </Row>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {isLoaded && (
//         <motion.div
//           className="content"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <Container>
//             <Row className="justify-content-center">
//               <Col>
//                 <Typography variant="h2" component="h1" align="center" gutterBottom>
//                   Bienvenido a Memories of the Nile
//                 </Typography>
//                 <Typography variant="body1" align="center">
//                   ¡Disfruta del recorrido!
//                 </Typography>
//               </Col>
//             </Row>
//           </Container>
//         </motion.div>
//       )}
//     </Container>
//   );
// };

// export default CLoader;

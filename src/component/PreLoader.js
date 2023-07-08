import './preloader.css'
import { preLoaderAnim } from '../animations'
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const PreLoader = () => {
  const egyptLoading1 = "/static/assets/egyptLoading1.gif";

  useEffect(() => {
    setTimeout(() => {
    preLoaderAnim();
  },4000);
  }, []);

  // useEffect(() => {
  //   preLoaderAnim();
  // }, []);

  return (
    <Container className='preloader'>

        <Row className='texts-container'>

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
                    // alt="Loading"
                    className="custom-loading-image"
                  />
                </Col>
              </Row>

            </motion.div>
            <Row>Cargando... </Row>

      </Row>
    </Container>
  )
}
export default PreLoader






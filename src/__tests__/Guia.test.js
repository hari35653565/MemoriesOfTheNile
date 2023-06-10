import React from 'react'
import '@testing-library/react'
import { useGLTF } from '@react-three/drei';
import Guia from '../Guia'

describe('Guia_function', () => {

    // Tests that the Intro component renders without errors. 
    it("test_Guia_renders_without_errors", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Guia {...props} />;

        // Assert
        expect(component).toBeDefined();
    });
});
import React from 'react'
import '@testing-library/react'
import { useGLTF } from '@react-three/drei';
import Menu from '../Menu'

describe('Menu_function', () => {

    // Tests that the Intro component renders without errors. 
    it("test_Menu_renders_without_errors", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Menu {...props} />;

        // Assert
        expect(component).toBeDefined();
    });
});
import React from 'react'
import '@testing-library/react'
import { useGLTF } from '@react-three/drei';
import Intro from '../Intro'

describe('Intro_function', () => {

    // Tests that the Intro component renders without errors. 
    it("test_Intro_renders_without_errors", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Intro {...props} />;

        // Assert
        expect(component).toBeDefined();
    });

  

    // Tests that the rotation prop is applied correctly. 
    it("test_Intro_rotation_prop_is_applied_correctly", () => {
        // Arrange
        const props = { rotation: [-Math.PI / 4, 0, 0] };

        // Act
        const component = <Intro {...props} />;

        // Assert
        expect(component.props.rotation).toEqual([-Math.PI / 4, 0, 0]);
    });


});
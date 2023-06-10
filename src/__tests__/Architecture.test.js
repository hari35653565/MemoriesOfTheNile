import React from 'react'
import '@testing-library/react'
import { useGLTF } from '@react-three/drei';
import Architecture from '../Architecture'

describe('Architecture_function', () => {

    // Tests that the Architecture component renders without errors. 
    it("test_templo2_renders_without_errors", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Architecture {...props} />;

        // Assert
        expect(component).toBeDefined();
    });

  

    // Tests that the rotation prop is applied correctly. 
    it("test_Architecture_rotation_prop_is_applied_correctly", () => {
        // Arrange
        const props = { rotation: [-Math.PI / 4, 0, 0] };

        // Act
        const component = <Architecture {...props} />;

        // Assert
        expect(component.props.rotation).toEqual([-Math.PI / 4, 0, 0]);
    });


});

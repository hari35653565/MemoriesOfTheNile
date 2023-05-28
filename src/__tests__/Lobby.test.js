import React from 'react'
import '@testing-library/react'
import { useGLTF } from '@react-three/drei';
import Lobby from '../Lobby'

describe('Lobby_function', () => {

    // Tests that the Lobby component renders without errors. 
    it("test_lobby_renders_without_errors", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Lobby {...props} />;

        // Assert
        expect(component).toBeDefined();
    });

  

    // Tests that the rotation prop is applied correctly. 
    it("test_Lobby_rotation_prop_is_applied_correctly", () => {
        // Arrange
        const props = { rotation: [-Math.PI / 4, 0, 0] };

        // Act
        const component = <Lobby {...props} />;

        // Assert
        expect(component.props.rotation).toEqual([-Math.PI / 4, 0, 0]);
    });


});
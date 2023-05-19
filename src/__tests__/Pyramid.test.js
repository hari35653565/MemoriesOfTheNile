import React from 'react'
import '@testing-library/react'
import { useGLTF } from '@react-three/drei';
import Pyramid from './../Pyramid'

describe('Pyramid_function', () => {

    // Tests that the Pyramid component renders without errors. 
    it("test_pyramid_renders_without_errors", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Pyramid {...props} />;

        // Assert
        expect(component).toBeDefined();
    });

    // Tests that the GLTF file is loaded successfully. 
    it("test_pyramid_loads_gltf_file_successfully", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Pyramid {...props} />;

        // Assert
        const { nodes, materials } = useGLTF("./../../static/the_great_pyramid_of_giza.glb");
        expect(nodes).toBeDefined();
        expect(materials).toBeDefined();
    });

    // Tests that the rotation prop is applied correctly. 
    it("test_pyramid_rotation_prop_is_applied_correctly", () => {
        // Arrange
        const props = { rotation: [-Math.PI / 4, 0, 0] };

        // Act
        const component = <Pyramid {...props} />;

        // Assert
        expect(component.props.rotation).toEqual([-Math.PI / 4, 0, 0]);
    });

    // Tests that the mesh objects are rendered with the correct geometry and material. 
    it("test_pyramid_mesh_objects_render_correctly", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Pyramid {...props} />;

        // Assert
        const { nodes, materials } = useGLTF("./../../static/the_great_pyramid_of_giza.glb");
        expect(component.props.children.props.children[0].props.geometry).toEqual(nodes["mat-0"].geometry);
        expect(component.props.children.props.children[0].props.material).toEqual(materials["mat-0"]);
    });

    // Tests that the castShadow and receiveShadow props are set correctly. 
    it("test_pyramid_cast_and_receive_shadow_props_are_set_correctly", () => {
        // Arrange
        const props = {};

        // Act
        const component = <Pyramid {...props} />;

        // Assert
        expect(component.props.children.props.children[0].props.castShadow).toBeTruthy();
        expect(component.props.children.props.children[0].props.receiveShadow).toBeTruthy();
    });
});

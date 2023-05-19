import React from 'react'
import '@testing-library/react'
import { useGLTF } from '@react-three/drei';
import Intro from './../Intro'

describe('Intro_function', () => {

    // Tests that the GLTF file is loaded successfully. 
    it("test_load_gltf_file_successfully", () => {
        const useGLTFMock = jest.fn();
        useGLTFMock.mockReturnValue({ scene: {} });
        const wrapper = shallow(<Intro />);
        expect(wrapper.find('primitive').prop('object')).toEqual({});
    });

    // Tests that the group is positioned correctly. 
    it("test_group_positioning", () => {
        const useGLTFMock = jest.fn();
        useGLTFMock.mockReturnValue({ scene: {} });
        const wrapper = shallow(<Intro />);
        expect(wrapper.find('group').prop('position-y')).toEqual(-1.03);
    });

    // Tests that an error is thrown when the GLTF file is not found. 
    it("test_gltf_file_not_found", () => {
        const useGLTFMock = jest.fn();
        useGLTFMock.mockImplementation(() => {
            throw new Error();
        });
        expect(() => shallow(<Intro />)).toThrow();
    });

    // Tests that the group is rotated correctly. 
    it("test_group_rotation", () => {
        const useGLTFMock = jest.fn();
        useGLTFMock.mockReturnValue({ scene: {} });
        const wrapper = shallow(<Intro />);
        expect(wrapper.find('group').prop('rotation-x')).toEqual(Math.PI * 0.03);
    });

    // Tests that the group is scaled correctly. 
    it("test_group_scaling", () => {
        const useGLTFMock = jest.fn();
        useGLTFMock.mockReturnValue({ scene: {} });
        const wrapper = shallow(<Intro />);
        expect(wrapper.find('group').prop('scale')).toEqual(2);
    });

    // Tests that the primitive object is rendered correctly. 
    it("test_primitive_object_rendering", () => {
        const useGLTFMock = jest.fn();
        useGLTFMock.mockReturnValue({ scene: { test: 'test' } });
        const wrapper = shallow(<Intro />);
        expect(wrapper.find('primitive').prop('object')).toEqual({ test: 'test' });
    });
});

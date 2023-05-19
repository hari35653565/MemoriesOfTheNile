import React from 'react'
import { render } from '@testing-library/react';
import Experience from './../Experience'

describe('Experience_function', () => {

    // Tests that the <Perf> component is rendered in the top-left position. 
    it("test_renders_perf_component", () => {
        const { getByTestId } = render(<Experience />);
        const perfComponent = getByTestId("perf-component");
        expect(perfComponent).toBeInTheDocument();
        expect(perfComponent).toHaveStyle("position: absolute; top: 0; left: 0;");
    });

    // Tests that the <OrbitControls> component is rendered and set as default. 
    it("test_renders_orbit_controls", () => {
        const { getByTestId } = render(<Experience />);
        const orbitControls = getByTestId("orbit-controls");
        expect(orbitControls).toBeInTheDocument();
        expect(orbitControls).toHaveAttribute("makeDefault");
    });

    // Tests that the <directionalLight> and <ambientLight> components are rendered with the correct position and intensity. 
    it("test_renders_lights", () => {
        const { getByTestId } = render(<Experience />);
        const directionalLight = getByTestId("directional-light");
        const ambientLight = getByTestId("ambient-light");
        expect(directionalLight).toBeInTheDocument();
        expect(directionalLight).toHaveAttribute("position", "1 2 3");
        expect(directionalLight).toHaveAttribute("intensity", "1.5");
        expect(ambientLight).toBeInTheDocument();
        expect(ambientLight).toHaveAttribute("intensity", "0.5");
    });

    // Tests that the <Intro> component is rendered without errors. 
    it("test_renders_intro_component", () => {
        const { getByTestId } = render(<Experience />);
        const introComponent = getByTestId("intro-component");
        expect(introComponent).toBeInTheDocument();
    });

    // Tests that the <Float> component is rendered with the correct speed. 
    it("test_renders_float_component", () => {
        const { getByTestId } = render(<Experience />);
        const floatComponent = getByTestId("float-component");
        expect(floatComponent).toBeInTheDocument();
        expect(floatComponent).toHaveAttribute("speed", "5");
    });

    // Tests that the <Text> component is rendered with the correct font, font size, color, position, maxWidth, and textAlign, and that the text inside is correct. 
    it("test_renders_text_component", () => {
        const { getByTestId } = render(<Experience />);
        const textComponent = getByTestId("text-component");
        expect(textComponent).toBeInTheDocument();
        expect(textComponent).toHaveAttribute("font", "./bangers-v20-latin-regular.woff");
        expect(textComponent).toHaveAttribute("fontSize", "1");
        expect(textComponent).toHaveAttribute("color", "#964B00");
        expect(textComponent).toHaveAttribute("position-y", "1.6");
        expect(textComponent).toHaveAttribute("maxWidth", "8");
        expect(textComponent).toHaveAttribute("textAlign", "center");
        expect(textComponent.textContent).toBe("Memories of the Nile");
    });
});

import React from 'react';
import '@testing-library/react'

describe('code_snippet', () => {

    // Tests that the Canvas component renders the Experience component. 
    it("test_canvas_renders_experience", () => {
        const root = ReactDom.createRoot(document.createElement('div'))
        root.render(
            <Canvas>
                <Experience/>
            </Canvas>
        )
        expect(root.findByType(Experience)).toBeTruthy()
    })

    // Tests that the Text component renders with correct font, color, and position. 
    it("test_text_component", () => {
        const root = ReactDom.createRoot(document.createElement('div'))
        root.render(
            <Canvas>
                <Experience/>
            </Canvas>
        )
        const text = root.findByType(Text)
        expect(text.props.font).toBe("./bangers-v20-latin-regular.woff")
        expect(text.props.fontSize).toBe(1)
        expect(text.props.color).toBe("#964B00")
        expect(text.props.position.y).toBe(1.6)
        expect(text.props.maxWidth).toBe(8)
        expect(text.props.textAlign).toBe("center")
    })

    // Tests that the Perf component renders in the top-left corner. 
    it("test_perf_component", () => {
        const root = ReactDom.createRoot(document.createElement('div'))
        root.render(
            <Canvas>
                <Experience/>
            </Canvas>
        )
        const perf = root.findByType(Perf)
        expect(perf.props.position).toBe("top-left")
    })

    // Tests that the OrbitControls component is default. 
    it("test_orbit_controls_component", () => {
        const root = ReactDom.createRoot(document.createElement('div'))
        root.render(
            <Canvas>
                <Experience/>
            </Canvas>
        )
        const orbitControls = root.findByType(OrbitControls)
        expect(orbitControls.props.makeDefault).toBeTruthy()
    })

    // Tests that the directionalLight component renders with correct position and intensity. 
    it("test_directional_light_component", () => {
        const root = ReactDom.createRoot(document.createElement('div'))
        root.render(
            <Canvas>
                <Experience/>
            </Canvas>
        )
        const directionalLight = root.findByType(directionalLight)
        expect(directionalLight.props.position).toEqual([1, 2, 3])
        expect(directionalLight.props.intensity).toBe(1.5)
    })

    // Tests that the ambientLight component renders with correct intensity. 
    it("test_ambient_light_component", () => {
        const root = ReactDom.createRoot(document.createElement('div'))
        root.render(
            <Canvas>
                <Experience/>
            </Canvas>
        )
        const ambientLight = root.findByType(ambientLight)
        expect(ambientLight.props.intensity).toBe(0.5)
    })
});

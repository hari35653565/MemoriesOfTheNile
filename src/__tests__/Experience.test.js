import 'jsdom-global/register';
import { fireEvent } from '@react-three/test-renderer';
import 'resize-observer-polyfill/dist/ResizeObserver.global';
import React from 'react';
import { Experience } from '../Experience';
import ReactThreeTestRenderer from '@react-three/test-renderer'


describe('Experience_function', () => {
  it('renders without errors', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Experience />);
  });
  // Tests that camera position changes correctly on arrow key press to the right
  it('test_camera_position_change_arrow_right', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Experience />);
    const mesh = renderer.scene.children[0];
    const arrowRightEvent = new KeyboardEvent('keydown', { code: 'ArrowRight' });
    await renderer.fireEvent(mesh, arrowRightEvent);
    const initialPosition = mesh.camera.position.toArray().join(',');
    fireEvent(document, arrowRightEvent);
    const newPosition = mesh.camera.position.toArray().join(',');
    expect(newPosition).not.toBe(initialPosition);
  });
  
  // Tests that camera position changes correctly on arrow key press to the left
  it('test_camera_position_change_arrow_left', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Experience />);
    const mesh = renderer.scene.children[0];
    const arrowLeftEvent = new KeyboardEvent('keydown', { code: 'ArrowLeft' });
    await renderer.fireEvent(mesh, arrowLeftEvent);
    const initialPosition = mesh.camera.position.toArray().join(',');
    fireEvent(document, arrowLeftEvent);
    const newPosition = mesh.camera.position.toArray().join(',');
    expect(newPosition).not.toBe(initialPosition);
  });
});

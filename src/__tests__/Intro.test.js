import React from 'react';
import { render } from '@testing-library/react';
import Intro from '../Intro';

jest.mock('@react-three/drei', () => ({
  useGLTF: jest.fn().mockReturnValue({ scene: {} })
}));

// Tests that the GLTF file is loaded successfully.
test('loads GLTF file successfully', () => {
  const { getByTestId } = render(<Intro />);
  const primitive = getByTestId('primitive');
  expect(primitive).not.toBeNull();
});










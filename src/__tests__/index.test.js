import 'resize-observer-polyfill/dist/ResizeObserver.global';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';
window.ResizeObserver = ResizeObserverPolyfill;

import React from 'react';
import { render } from '@testing-library/react';
import { Experience } from './../Experience';
import { Canvas } from '@react-three/fiber';
import '@testing-library/jest-dom/extend-expect';


test('renders without crashing', () => {
  const { container } = render(
    <Canvas>
      <Experience />
    </Canvas>
  );
  expect(container).toBeInTheDocument();
});

import React from 'react';
import { Html } from '@react-three/drei';

const PopupWindow = ({ isOpen, onClose, title, text }) => {
  if (!isOpen) return null;

  return (
    <Html>
      <div className="popup-overlay">
        <div className="popup-content">
          {/* Content of the popup window */}
          <h2>{title}</h2>
          <p>{text}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Html>
  );
};

export default PopupWindow;

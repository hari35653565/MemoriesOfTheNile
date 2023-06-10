import React,{useEffect} from 'react';
import { Html } from '@react-three/drei';

const PopupWindow = ({ isOpen, onClose, title, text, position }) => {
  if (!isOpen) return null;

  return (
    <Html position={position}>
      <div className="popup-overlay">
        <div className="popup-content" >
          {/* Content of the popup window */}
          <h2 className="mitexto">{title}</h2>
          <p className="mitexto">{text}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Html>
  );
};

export default PopupWindow;

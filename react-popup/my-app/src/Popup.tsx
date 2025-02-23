import { createPortal } from 'react-dom';
import './App.css';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  positionTo: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
};

export function Popup({ isOpen, positionTo, onClose, children }: Props) {
  if (!isOpen) return null;

  const popupRef = positionTo?.getBoundingClientRect();
  const top = popupRef ? popupRef.top + popupRef.height : '100%';
  const left = popupRef ? popupRef.left + popupRef.width / 2 : '50%';

  return createPortal(
    <div
      className="wrapper back-shade"
      style={{ position: 'absolute', left, top }}
      onClick={onClose}>
      {children}
    </div>,
    document.body
  );
}

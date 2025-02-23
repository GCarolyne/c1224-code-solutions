import { useRef, useState } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  const [isWorking, setisWorking] = useState(true);
  const modal = useRef<HTMLDialogElement>(null);

  function openModal() {
    modal.current?.showModal();
    setisWorking(true);
  }

  function closeModal() {
    modal.current?.close();
    setisWorking(false);
  }

  return (
    <>
      <button onClick={openModal}>Delete Me!</button>{' '}
      <Modal
        isOpen={isWorking}
        onClose={() => {
          if (isWorking) setisWorking(false);
        }}>
        {' '}
        <div>
          {' '}
          <p>Do you really want to delete this?</p>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={closeModal}>Delete</button>
        </div>
      </Modal>
    </>
  );
}

export default App;

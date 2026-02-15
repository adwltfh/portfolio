'use client';

import { useModal } from "../contexts/ModalContext";

export default function TestPage() {
  const { openModal } = useModal();

  return (
    <div className="p-8">
      <h1>Test Modal</h1>
      <button
        onClick={() => openModal('Test', <p>It works!</p>)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>
    </div>
  );
}
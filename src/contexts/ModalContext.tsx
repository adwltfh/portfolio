'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Modal {
  id: string;
  title: string;
  content: ReactNode;
  isMinimized: boolean;
  zIndex: number;
}

interface ModalContextType {
  modals: Modal[];
  openModal: (title: string, content: ReactNode) => void;
  closeModal: (id: string) => void;
  toggleMinimize: (id: string) => void;
  bringToFront: (id: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<Modal[]>([]);
  const [nextId, setNextId] = useState(1);

  const openModal = (title: string, content: ReactNode) => {
    console.log('openModal called with:', title);

    const newModal = {
      id: `modal-${nextId}`,
      title,
      content,
      isMinimized: false,
      zIndex: nextId,
    };
    console.log('Creating modal:', newModal);

    setModals([...modals, newModal]);
    setNextId(nextId + 1);
  };

  const closeModal = (id: string) => {
    setModals(modals.filter((m) => m.id !== id));
  };

  const toggleMinimize = (id: string) => {
    setModals(modals.map((m) => 
      m.id === id ? { ...m, isMinimized: !m.isMinimized } : m
    ));
  };

  const bringToFront = (id: string) => {
    const maxZ = Math.max(...modals.map((m) => m.zIndex), 0);
    setModals(modals.map((m) => 
      m.id === id ? { ...m, zIndex: maxZ + 1 } : m
    ));
  };

  console.log('Current modals:', modals);

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal, toggleMinimize, bringToFront }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
}
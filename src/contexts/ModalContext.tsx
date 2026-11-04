import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isProjectModalOpen: boolean;
  openProjectModal: () => void;
  closeProjectModal: () => void;
  isScheduleModalOpen: boolean;
  openScheduleModal: () => void;
  closeScheduleModal: () => void;
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isProjectModalOpen,
        openProjectModal: () => setIsProjectModalOpen(true),
        closeProjectModal: () => setIsProjectModalOpen(false),
        isScheduleModalOpen,
        openScheduleModal: () => setIsScheduleModalOpen(true),
        closeScheduleModal: () => setIsScheduleModalOpen(false),
        isMenuOpen,
        openMenu: () => setIsMenuOpen(true),
        closeMenu: () => setIsMenuOpen(false),
        toggleMenu: () => setIsMenuOpen((prev) => !prev),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};


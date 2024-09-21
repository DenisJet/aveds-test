import { createContext, ReactNode, useState } from 'react';

export type ModalContext = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

export const ModalContext = createContext<ModalContext>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>{children}</ModalContext.Provider>;
};

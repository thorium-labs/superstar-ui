import React, { Dispatch, useRef } from 'react';
import { useClickAway } from 'react-use';
import { GradientButton } from '../Buttons';

interface WalletModalProps {
  isOpen: boolean;
  setOpen: Dispatch<boolean>;
  walletRepo?: {
    connect: (walletName?: string, sync?: boolean) => Promise<void>;
  };
}

const ModalWallet: React.FC<WalletModalProps> = ({ walletRepo, setOpen, isOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleConnect = async (walletName?: string) => {
    if (!walletRepo) return;
    await walletRepo.connect(walletName);
    setOpen(false);
  };

  useClickAway(modalRef, () => setOpen(false));

  if (!isOpen) return null;

  return (
    <div className="flex flex-col items-center justify-center fixed z-50 bg-stone-700/50 backdrop-blur-lg w-screen h-screen">
      {/* A modal with two button to select between one wallet or another */}
      <div ref={modalRef} className="rounded-3xl max-w-[480px] w-full p-4 md:p-10 bg-ss-bg flex flex-col gap-8">
        <h2 className="font-bold text-4xl">Choose your wallet</h2>

        <GradientButton onClick={() => handleConnect('vectis-extension')}>Vectis</GradientButton>
        <GradientButton onClick={() => handleConnect('keplr-extension')}>Keplr</GradientButton>
      </div>
    </div>
  );
};

export default ModalWallet;

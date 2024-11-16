import Modal from 'components/materials/Modal';
import { useState } from 'react';
import { Post } from 'states/posts.state';
import {useDynamicContext} from "@dynamic-labs/sdk-react-core";
import {isEthereumWallet} from "@dynamic-labs/ethereum";
import {getSigner} from "@dynamic-labs/ethers-v6";
import {IERC20Minimal__factory} from "../../../typechain";

interface UnlockerButtonProps {
  post: Post;
  unlocked: boolean;
  setUnlocked: (u: boolean) => void;
}

export const UnlockerButton = ({
  post,
  unlocked,
  setUnlocked,
}: UnlockerButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onUnlock = async () => {
    setUnlocked(true);
    const { primaryWallet } = useDynamicContext();
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null;

    const USDCAddress =...ㅠㅠㅠ
    const approveUSDC = async () => {
      const signer = await getSigner(primaryWallet);
      const usdc= IERC20Minimal__factory.connect("", signer);
      usdc.approve()
    }

    closeModal();
  };

  if (unlocked) return null;
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0">
        <div className="mx-auto max-w-3xl flex p-6 bg-white/80">
          <button className="btn-primary w-full" onClick={openModal}>
            Unlock
          </button>
        </div>
      </div>

      <Modal title="Unlock Contents" isOpen={isModalOpen} onClose={closeModal}>
        <p className='text-3xl font-semibold text-primary text-center'>{post.price} USDC</p>
        <button onClick={onUnlock} className="mt-4 btn-primary w-full">
          Unlock
        </button>
      </Modal>
    </>
  );
};

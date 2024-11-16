import { isEthereumWallet } from '@dynamic-labs/ethereum';
import { getSigner } from '@dynamic-labs/ethers-v6';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import Modal from 'components/materials/Modal';
import { parseUnits } from 'ethers/utils';
import { useState } from 'react';
import { Post } from 'states/posts.state';
import { KREToken__factory, MockUSDC__factory } from 'typechain/factories';
import {purchasePost} from "../../../states/user.state.ts";

interface UnlockerButtonProps {
  post: Post;
  unlocked: boolean;
  setUnlocked: (u: boolean) => void;
}

export const UnlockerButton =  ({
  post,
  unlocked,
  setUnlocked,
}: UnlockerButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false)
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const { primaryWallet } = useDynamicContext();

  const onApprove = async () => {
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null;
    const signer = await getSigner(primaryWallet);

    const mockUSDC = MockUSDC__factory.connect("0x29b021A913893A049266E7D5eD0fc553d4373E79", signer);
    const tx = await mockUSDC.approve("0x45A8f175CAf1FA795D9EC7411427b399b65743eb", parseUnits(String(post.price), 6));
    await tx.wait();
    setIsApproved(true);
  };

  const onUnlock = async () => {
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null;
    const signer = await getSigner(primaryWallet);

    const kreToken = KREToken__factory.connect("0x45A8f175CAf1FA795D9EC7411427b399b65743eb", signer);
    const tx = await kreToken.buy(post.id);
    console.log(tx);
    await tx.wait();
    setUnlocked(true);

    closeModal();
    purchasePost(post.id);
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
        <button onClick={onApprove} className="mt-4 btn-primary w-full" disabled={isApproved}>
          Approve
        </button>
        <button onClick={onUnlock} className="mt-4 btn-primary w-full" disabled={!isApproved}>
          Unlock
        </button>
      </Modal>
    </>
  );
};

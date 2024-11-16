import { isEthereumWallet } from '@dynamic-labs/ethereum';
import { getSigner } from '@dynamic-labs/ethers-v6';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import Modal from 'components/materials/Modal';
import { parseUnits } from 'ethers/utils';
import { useState } from 'react';
import { Post } from 'states/posts.state';
import { KREToken__factory, MockUSDC__factory } from 'typechain/factories';
import {purchasePost} from "../../../states/user.state.ts";
import SEPOLIA_CONTRACTS from 'configs/sepolia.ts';

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

    const mockUSDC = MockUSDC__factory.connect(SEPOLIA_CONTRACTS.MOCKUSDC, signer);
    console.log(post.price);
    const tx = await mockUSDC.approve(SEPOLIA_CONTRACTS.MOCKUSDC, parseUnits(String(post.price), 6));
    await tx.wait();
    console.log(tx);
    
    const allowance = await mockUSDC.allowance(primaryWallet.address, SEPOLIA_CONTRACTS.MOCKUSDC);
    console.log(allowance);

    if (allowance >= (parseUnits(String(post.price), 6))) {
      console.log("Approval successful. Allowance:", allowance.toString());
      setIsApproved(true);
    } else {
      console.error("Approval failed. Allowance:", allowance.toString());
      setIsApproved(false);
    }
  };

  const onUnlock = async () => {
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null;
    const signer = await getSigner(primaryWallet);

    const kreToken = KREToken__factory.connect(SEPOLIA_CONTRACTS.KRETOKEN, signer);
    console.log(kreToken);
    console.log(post.id);

    const tx = await kreToken.unlock(post.id);
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

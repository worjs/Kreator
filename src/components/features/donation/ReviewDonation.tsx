import React, { useState } from 'react';
import { Star } from './SelectStar';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { isEthereumWallet } from '@dynamic-labs/ethereum';
import { getSigner } from '@dynamic-labs/ethers-v6';
import { parseUnits } from 'ethers/utils';
import { KREToken__factory, MockUSDC__factory } from '../../../typechain'; // `Star` 타입이 `SelectStar`에서 온다고 가정
import SEPOLIA_CONTRACTS from 'configs/sepolia';

interface ReviewDonationProps {
  star: Star | null;
  organization: string;
  amount: number;
  onConfirm: () => void;
  onBack: () => void;
}

const ReviewDonation: React.FC<ReviewDonationProps> = ({
  star,
  organization,
  amount,
  onConfirm,
  onBack,
}) => {
  const { primaryWallet } = useDynamicContext();
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onApprove = async () => {
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return;
    const signer = await getSigner(primaryWallet);
    setLoading(true);

    try {
      const mockUSDC = MockUSDC__factory.connect(
        SEPOLIA_CONTRACTS.MOCKUSDC,
        signer,
      );
      const tx = await mockUSDC.approve(
        SEPOLIA_CONTRACTS.MOCKUSDC,
        parseUnits(String(amount), 6),
      );
      await tx.wait();
      setIsApproved(true);
    } catch (error) {
      console.error('Approval failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const onDonate = async () => {
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) return;
    const signer = await getSigner(primaryWallet);
    setLoading(true);

    try {
      const kreToken = KREToken__factory.connect(
        SEPOLIA_CONTRACTS.KRETOKEN,
        signer,
      );
      const tx = await kreToken.distribute(amount);
      await tx.wait();
      onConfirm();
    } catch (error) {
      console.error('Donation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {star && (
        <>
          <img
            src={star.image}
            alt={star.name}
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{star.name}</h2>
        </>
      )}

      <p className="text-center mb-6">
        Donate <span className="font-bold">{amount} KRE</span> to{' '}
        <span className="font-bold">{organization}</span> under the name of{' '}
        <span className="font-bold">{star?.name}</span>.
      </p>

      <div className="flex gap-4">
        <button className="btn-secondary" onClick={onBack}>
          Change the organization
        </button>
        {!isApproved ? (
          <button
            className="btn-primary"
            onClick={onApprove}
            disabled={loading}
          >
            {loading ? 'Approving...' : 'Approve'}
          </button>
        ) : (
          <button className="btn-primary" onClick={onDonate} disabled={loading}>
            {loading ? 'Donating...' : 'Donate'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewDonation;

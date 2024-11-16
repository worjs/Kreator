import React from 'react';
import { Star } from './SelectStar'; // `Star` 타입이 `SelectStar`에서 온다고 가정

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
  // const { primaryWallet } = useDynamicContext();
  // const [isApproved, setIsApproved] = useState<boolean>(false);

  // const onApprove = async () => {
  //   if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null;
  //   const signer = await getSigner(primaryWallet);

  //   const mockUSDC = MockUSDC__factory.connect("0x29b021A913893A049266E7D5eD0fc553d4373E79", signer);
  //   const tx = await mockUSDC.approve("0x45A8f175CAf1FA795D9EC7411427b399b65743eb", parseUnits(String(amount), 6));
  //   await tx.wait();
  //   setIsApproved(true);
  // };

  // const onDonate = async () => {
  //   if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null;
  //   const signer = await getSigner(primaryWallet);

  //   const kreToken = KREToken__factory.connect("0x29b021A913893A049266E7D5eD0fc553d4373E79", signer);
  //   const tx = await kreToken.distribute(amount);
  //   await tx.wait();
  //   setIsApproved(true);
  // };

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
        Donate <span className="font-bold">{amount} USDC</span> to{' '}
        <span className="font-bold">{organization}</span> under the name of{' '}
        <span className="font-bold">{star?.name}</span>.
      </p>

      <div className="flex gap-4">
        <button className="btn-secondary" onClick={onBack}>
          Change the organization
        </button>
        <button className="btn-primary" onClick={onConfirm}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default ReviewDonation;

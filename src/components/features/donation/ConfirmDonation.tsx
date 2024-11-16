import React, { useState } from 'react';
import { Star } from './SelectStar'; // `Star` 타입이 `SelectStar`에서 온다고 가정

interface ConfirmDonationProps {
  star: Star | null;
  onAmountChange: (amount: number) => void;
  onNext: () => void;
}

const ConfirmDonation: React.FC<ConfirmDonationProps> = ({
  star,
  onAmountChange,
  onNext,
}) => {
  const [amount, setAmount] = useState<number | string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);

    // onAmountChange에 숫자로 변환된 값을 전달하거나 0으로 처리
    onAmountChange(value === '' ? 0 : parseFloat(value));
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
          <p className="text-center mb-6">
            Would you like to make a donation under this star's name?
          </p>
        </>
      )}

      <div className="w-full mb-6">
        <label
          htmlFor="donationAmount"
          className="block text-sm font-medium mb-2"
        >
          Enter donation amount (in KRE):
        </label>
        <input
          type="number"
          id="donationAmount"
          value={amount}
          onChange={handleAmountChange}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Enter amount"
          min="0"
        />
      </div>

      <div className="flex gap-4">
        <button className="btn-secondary" onClick={() => setAmount('')}>
          NO
        </button>
        <button
          className="btn-primary"
          onClick={onNext}
          disabled={parseFloat(amount as string) <= 0}
        >
          YES
        </button>
      </div>
    </div>
  );
};

export default ConfirmDonation;

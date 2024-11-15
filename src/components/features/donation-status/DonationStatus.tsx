import React from 'react';

interface Organization {
  name: string;
  amount: number;
}

interface DonationStatusProps {
  star: { name: string; image: string };
  accumulatedAmount: number;
  organizations: Organization[];
  onViewRankings: () => void;
}

const DonationStatus: React.FC<DonationStatusProps> = ({
  star,
  accumulatedAmount,
  organizations,
  onViewRankings,
}) => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-center mb-4">
        <img
          src={star.image}
          alt={star.name}
          className="w-32 h-32 rounded-full mb-2"
        />
        <h2 className="text-2xl font-bold text-primary">{star.name}</h2>
        <p className="text-sm text-neutral-600">Accumulated sponsored amount</p>
        <p className="text-3xl font-bold text-primary">
          {accumulatedAmount.toLocaleString()} USDC
        </p>
      </div>

      <div className="w-full max-w-lg mb-6">
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Sponsored Organizations</th>
              <th className="px-4 py-2 border-b">Total Amount (USDC)</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{org.name}</td>
                <td className="px-4 py-2 border-b text-right">
                  {org.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn-primary w-full" onClick={onViewRankings}>
        View Donation Rankings
      </button>
    </div>
  );
};

export default DonationStatus;

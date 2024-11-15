import React from 'react';

interface Ranking {
  rank: number;
  star: { name: string; image: string };
  amount: number;
}

interface DonationRankingProps {
  rankings: Ranking[];
  onReturn: () => void;
}

const DonationRanking: React.FC<DonationRankingProps> = ({
  rankings,
  onReturn,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">2024 11 Nov. Rankings</h2>
      <div className="w-full overflow-auto">
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Rank</th>
              <th className="px-4 py-2 border-b">Star</th>
              <th className="px-4 py-2 border-b">Total Amount (USDC)</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((entry) => (
              <tr key={entry.rank}>
                <td className="px-4 py-2 border-b">{entry.rank}</td>
                <td className="px-4 py-2 border-b flex items-center">
                  <img
                    src={entry.star.image}
                    alt={entry.star.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  {entry.star.name}
                </td>
                <td className="px-4 py-2 border-b text-right">
                  {entry.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn-primary w-full mt-4" onClick={onReturn}>
        Return to My Board
      </button>
    </div>
  );
};

export default DonationRanking;

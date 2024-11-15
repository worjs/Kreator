import React from 'react';
import { Link } from 'react-router-dom';
import PATH from '../../../router/paths.ts';

interface DonationCompletedProps {
  onViewStatus: () => void;
}

const DonationCompleted: React.FC<DonationCompletedProps> = ({
  onViewStatus,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Donation completed!</h2>
        <p className="text-sm mb-6">
          Thank you for your generous contribution! Your donation has been
          successfully processed.
        </p>
        <Link
          to={PATH.DONATION_STATUS}
          className="btn-primary w-full"
          onClick={onViewStatus}
        >
          View Donation Status
        </Link>
      </div>
    </div>
  );
};

export default DonationCompleted;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from 'components/layout/Wrapper';
import Body from 'components/layout/Body';
import { Header } from 'components/layout/Header';
import DonationStatus from '../components/features/donation-status/DonationStatus.tsx';

const DonationStatusPage: React.FC = () => {
  const nav = useNavigate();
  const star = { name: 'LISA', image: '/assets/stars/lisa.webp' };
  const accumulatedAmount = 104568424;
  const organizations = [
    { name: 'Association for the Promotion...', amount: 104568424 },
    { name: 'Poh Teck Tung Foundation', amount: 73121002 },
    { name: 'Gift of Happiness Foundation', amount: 42560083 },
  ];

  return (
    <Wrapper>
      <Header title="Donation Status" />
      <Body>
        <DonationStatus
          star={star}
          accumulatedAmount={accumulatedAmount}
          organizations={organizations}
          onViewRankings={() => nav('/ranking')}
        />
      </Body>
    </Wrapper>
  );
};

export default DonationStatusPage;

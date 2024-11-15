import { useState } from 'react';
import SelectStar, {
  Star,
} from '../components/features/donation/SelectStar.tsx';
import Wrapper from '../components/layout/Wrapper.tsx';
import { Header } from '../components/layout/Header.tsx';
import Body from '../components/layout/Body.tsx';
import ConfirmDonation from '../components/features/donation/ConfirmDonation.tsx';
import SelectOrganization from '../components/features/donation/SelectOrganization.tsx';
import ReviewDonation from '../components/features/donation/ReviewDonation.tsx';
import DonationCompleted from '../components/features/donation/DonationCompleted.tsx';

const DonationPage = () => {
  const [step, setStep] = useState(1);
  const [selectedStar, setSelectedStar] = useState<Star | null>(null);
  const [selectedOrganization, setSelectedOrganization] = useState<string>('');
  const [donationAmount, setDonationAmount] = useState<number>(0);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SelectStar onSelect={setSelectedStar} onNext={() => setStep(2)} />
        );
      case 2:
        return (
          <ConfirmDonation
            star={selectedStar}
            onAmountChange={setDonationAmount}
            onNext={() => setStep(3)}
          />
        );
      case 3:
        return (
          <SelectOrganization
            onSelect={setSelectedOrganization}
            onNext={() => setStep(4)}
          />
        );
      case 4:
        return (
          <ReviewDonation
            star={selectedStar}
            organization={selectedOrganization}
            amount={donationAmount}
            onConfirm={() => setStep(5)}
            onBack={() => setStep(3)}
          />
        );
      case 5:
        return <DonationCompleted onViewStatus={() => setStep(1)} />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Header title="Donation" />
      <Body className="flex flex-col px-6">{renderStep()}</Body>
    </Wrapper>
  );
};

export default DonationPage;

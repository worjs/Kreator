import React, { useState } from 'react';

interface SelectOrganizationProps {
  onSelect: (organization: string) => void;
  onNext: () => void;
}

const organizations = [
  'Association for the Promotion of the Status of Women',
  'Gift of Happiness Foundation',
  'Poh Teck Tung Foundation',
  'Red Cross',
  'UNICEF',
];

const SelectOrganization: React.FC<SelectOrganizationProps> = ({
  onSelect,
  onNext,
}) => {
  const [selectedOrganization, setSelectedOrganization] = useState<string>('');

  const handleSelect = (organization: string) => {
    setSelectedOrganization(organization);
    onSelect(organization);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">
        Choose an organization to donate under this star's name:
      </h2>
      <div className="w-full flex flex-col gap-4">
        {organizations.map((organization) => (
          <div
            key={organization}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedOrganization === organization
                ? 'border-primary'
                : 'border-gray-300'
            }`}
            onClick={() => handleSelect(organization)}
          >
            <p className="text-lg font-medium">{organization}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-6 btn-primary"
        onClick={onNext}
        disabled={!selectedOrganization}
      >
        Select
      </button>
    </div>
  );
};

export default SelectOrganization;

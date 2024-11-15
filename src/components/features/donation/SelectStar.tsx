import React from 'react';

export interface Star {
  name: string;
  image: string;
}

interface SelectStarProps {
  onSelect: (star: Star) => void;
  onNext: () => void;
}

const stars: Star[] = [
  { name: 'LISA', image: 'assets/stars/lisa.webp' },
  { name: 'BTS', image: 'assets/stars/BTS.jpeg' },
  { name: 'Jungkook', image: 'assets/stars/JungKook.jpg' },
  { name: 'BLACKPINK', image: 'assets/stars/blackpink.jpg' },
  { name: 'aespa', image: 'assets/stars/aespa.jpg' },
  { name: 'ive', image: 'assets/stars/ive.jpg' },
];

const SelectStar: React.FC<SelectStarProps> = ({ onSelect, onNext }) => {
  const [selectedStar, setSelectedStar] = React.useState<Star | null>(null);

  const handleSelect = (star: Star) => {
    setSelectedStar(star);
    onSelect(star);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">
        In whose name will you be donating?
      </h2>
      <div className="w-full flex flex-col gap-4">
        {stars.map((star) => (
          <div
            key={star.name}
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${
              selectedStar?.name === star.name
                ? 'border-primary'
                : 'border-gray-300'
            }`}
            onClick={() => handleSelect(star)}
          >
            <img
              src={star.image}
              alt={star.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <p className="text-lg font-medium">{star.name}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-6 btn-primary"
        onClick={onNext}
        disabled={!selectedStar}
      >
        Select
      </button>
    </div>
  );
};

export default SelectStar;

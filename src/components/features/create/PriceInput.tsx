import React from 'react';

interface PriceInputProps {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
}

const PriceInput: React.FC<PriceInputProps> = ({ price, setPrice }) => {
  return (
    <div className="w-full">
      <label htmlFor="price" className="block text-lg font-medium mb-2">
        How much would you like to charge for the paid content?
      </label>
      <div className="flex items-center">
        <input
          id="price"
          type="number"
          className="w-1/4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-xl text-primary"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="0"
          min="0"
          aria-describedby="price-description"
        />
        <span className="ml-2 text-xl text-primary">USDC</span>
      </div>
    </div>
  );
};

export default PriceInput;

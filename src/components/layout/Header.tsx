import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  const handleBackClick = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.warn("No history found, cannot go back");
    }
  };

  return (
    <header className="flex items-center px-6 h-[72px] justify-between">
      <div className="flex items-center">
        <button
          onClick={handleBackClick}
          className="mr-2"
        >
          {"<"}
        </button>
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <DynamicWidget />
    </header>
  );
};

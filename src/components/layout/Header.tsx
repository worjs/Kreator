import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

interface HeaderProps {
  title?: string;
}
export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex items-center px-6 h-[72px] justify-between">
      <p className="text-xl font-semibold">{title}</p>
      <DynamicWidget />
    </header>
  );
};

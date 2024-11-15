import { cn } from 'utils/cn';

interface TextInputProps {
  className?: string;
  value: string;
  setValue: (val: string) => void;
  placeholder?: string;
  onEnter?: () => void;
}

export const TextInput = ({
  value,
  setValue,
  className,
  placeholder,
  onEnter,
}: TextInputProps) => {
  return (
    <input
      placeholder={placeholder}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onEnter && onEnter();
      }}
      className={cn(
        'rounded-xl px-4 py-3.5 border border-neutral-400 outline-none',
        className,
      )}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

import ReactDOM from 'react-dom';
import { cn } from 'utils/cn';

interface ModalProps {
  title?: string;
  noHeader?: boolean;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  title,
  noHeader,
  onClose,
  children,
  className,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex-center bg-black bg-opacity-30 z-50"
      onClick={onClose}
    >
      <div
        className={cn(
          'relative bg-white p-4 rounded-2xl shadow-lg max-w-lg w-[calc(100%-2rem)]',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {!noHeader && (
          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium">{title}</p>
            <p className="text-lg" onClick={onClose}>
              &#x2715;
            </p>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body,
  );
}

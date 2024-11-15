import React from 'react';

interface DividerProps {
  className?: string; // 추가적인 스타일링을 위해 클래스명을 전달할 수 있도록
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return <hr className={`border-gray-300 ${className}`} />;
};

export default Divider;

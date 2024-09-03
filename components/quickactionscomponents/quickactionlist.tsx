import React from 'react';

interface QuickActionListProps {
  direction: string; // Correctly define the prop type as string
}

const QuickActionList: React.FC<QuickActionListProps> = ({ direction }) => {
  return (
    <div>
      <p className="font-semibold text-base">{direction}</p>
    </div>
  );
};

export default QuickActionList;


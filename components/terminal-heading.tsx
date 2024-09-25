import React from 'react';

interface TerminalHeadingProps {
  command: string;
}

const TerminalHeading: React.FC<TerminalHeadingProps> = ({ command }) => {
  return (
    <h3 className="text-gray-600 font-mono text-xl font-semibold mb-4">
      $ {command}
    </h3>
  );
};

export default TerminalHeading;
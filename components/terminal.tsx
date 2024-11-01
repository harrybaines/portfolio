import React from 'react';

interface TerminalProps {
  command: string;
}

const Terminal: React.FC<TerminalProps> = ({ command }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden my-8">
      <div className="bg-gray-800 py-2 flex items-center">
        <p className="text-gray-400 text-sm ml-4">{command}</p>
      </div>
    </div>
  );
};

export default Terminal;
import React from 'react';
import { ChatInterface } from './chat-interface/ChatInterface';

export type SearchEngineProps = {
  handleGenerateId: () => void;
};

const Home_After_Search: React.FC<SearchEngineProps> = ({
  handleGenerateId
}) => {
  return (
    <div>
      <ChatInterface handleGenerateId={handleGenerateId} />
    </div>
  );
};

export default Home_After_Search;

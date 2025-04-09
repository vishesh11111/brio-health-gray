'use client';

import type React from 'react';
import { useQueryState } from 'nuqs';
import Home_Before_Search from './Home_Before_Search';
import Home_After_Search from './Home_After_Search';
import { HistoryPanel } from './chat-interface/history-panel';

export default function HomeSearch() {
  const [generateId, setGenerateId] = useQueryState('generateId');
  const [isHistoryOpen, setIsHistoryOpen] = useQueryState('history', {
    defaultValue: 'close',
    parse: (value) => value || 'close', // Return the value or default to "close"
    serialize: (value) => value // Just return the string value
  });
  const isHistoryPanelOpens = isHistoryOpen !== 'close';

  const generateRandomId = () => {
    const prefix = 'brio';
    const numbers = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomChars = '';
    for (let i = 0; i < 4; i++) {
      randomChars += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${prefix}${numbers}${randomChars}`;
  };

  const handleGenerateId = () => {
    const newId = generateRandomId();
    setGenerateId(newId);
  };

  return (
    <div>
      {generateId ? (
        <Home_After_Search handleGenerateId={handleGenerateId} />
      ) : (
        <Home_Before_Search handleGenerateId={handleGenerateId} />
      )}
      <HistoryPanel
        isOpen={isHistoryPanelOpens}
        onClose={() => setIsHistoryOpen('close')}
        width={380}
      />
    </div>
  );
}

import React from 'react';
import { ScrollArea } from '<components>/components/ui/scroll-area';

export default function PageContainer({
  children,
  scrollable = true
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className='h-full max-h-[calc(100vh-50px)]'>
          <div className='flex h-[calc(100vh-80px)] flex-1 overflow-auto bg-[#F7FAFF] p-4 md:px-6'>
            {children}
          </div>
        </ScrollArea>
      ) : (
        <div className='flex h-[calc(100vh-80px)] flex-1 overflow-auto bg-[#F7FAFF] p-4 md:px-6'>
          {children}
        </div>
      )}
    </>
  );
}

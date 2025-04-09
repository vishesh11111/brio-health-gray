import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] overflow-auto bg-[#F7FAFF]'>
      {children}
    </div>
  );
};

export default Container;

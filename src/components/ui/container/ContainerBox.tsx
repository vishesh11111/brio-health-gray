import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};
const ContainerBox: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto h-auto w-full max-w-[1200px] pr-4 pl-4 xl:pl-6'>
      {children}
    </div>
  );
};

export default ContainerBox;

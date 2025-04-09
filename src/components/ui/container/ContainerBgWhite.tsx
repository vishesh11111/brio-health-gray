import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};
const ContainerBgWhite: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='h-full w-full overflow-auto rounded-2xl border border-[#EDEFF3] bg-[#fff] p-5'>
      {children}
    </div>
  );
};

export default ContainerBgWhite;

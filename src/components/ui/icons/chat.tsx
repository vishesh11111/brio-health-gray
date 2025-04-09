import Image from 'next/image';

export const CalendarIcon = () => {
  return (
    <div className='flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#F7FAFF] p-[2px]'>
      <Image
        width={100}
        className='h-[10px] w-[10px]'
        height={100}
        unoptimized
        src='/home/attachment.svg'
        alt=''
      />
    </div>
  );
};

export const DeleteIcon = () => {
  return (
    <div className='flex h-[16px] w-[16px] items-center justify-center rounded-full dark:bg-slate-800 bg-[#F7FAFF] p-[2px]'>
      <Image
        width={100}
        className='h-[16px] w-[16px]'
        height={100}
        unoptimized
        src='/chat/bin.svg'
        alt=''
      />
    </div>
  );
};

export const SearchIcon = () => {
  return (
    <div className='flex h-[14.97px] w-[14.97px]'>
      <Image
        width={100}
        className='h-[14.97px] w-[14.97px]'
        height={100}
        unoptimized
        src='/chat/search.svg'
        alt=''
      />
    </div>
  );
};

export const CancelIcon = () => {
  return (
    <div className='flex h-[14.59px] w-[14.59px]'>
      <Image
        width={100}
        className='h-[14.59px] w-[14.59px]'
        height={100}
        unoptimized
        src='/chat/cancel.svg'
        alt=''
      />
    </div>
  );
};

export const WikiIcon = () => {
  return (
    <div className='flex h-[16px] w-[16px]'>
      <Image
        width={100}
        className='h-[16px] w-[16px]'
        height={100}
        unoptimized
        src='/chat/wiki.svg'
        alt=''
      />
    </div>
  );
};

//
export const CloseWebIcon = () => {
  return (
    <div className='-mt-1 flex h-[12.61px] w-[12.61px]'>
      <Image
        width={100}
        className='h-[12.61px] w-[12.61px]'
        height={100}
        unoptimized
        src='/chat/close.svg'
        alt=''
      />
    </div>
  );
};

export const ResizeIcon = () => {
  return (
    <div className='-mt-1 flex h-[12.6px] w-[12.6px]'>
      <Image
        width={100}
        className='h-[12.6px] w-[12.6px]'
        height={100}
        unoptimized
        src='/chat/resize.svg'
        alt=''
      />
    </div>
  );
};

export const CopyIcon = () => {
  return (
    <div className='-mt-1 flex h-[15.84px] w-[13.2px]'>
      <Image
        width={100}
        className='h-[15.84px] w-[13.2px]'
        height={100}
        unoptimized
        src='/chat/copy.svg'
        alt=''
      />
    </div>
  );
};

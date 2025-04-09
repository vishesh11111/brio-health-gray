import Image from 'next/image';

export const MasterCardIcon = () => {
  return (
    <div className='flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F7FAFF] p-[1px]'>
      <Image
        width={100}
        height={100}
        className='h-[18px] w-[18px]'
        unoptimized
        src='/plan/masterCardIcon.svg'
        alt=''
      />
    </div>
  );
};

export const WifiCardIcon = () => {
  return (
    <div className='flex h-[24px] w-[20px] items-center justify-center rounded-full'>
      <Image
        width={100}
        height={100}
        className='h-full w-full'
        unoptimized
        src='/plan/wifiIcon.svg'
        alt=''
      />
    </div>
  );
};

export const ViewIcon = () => {
  return (
    <div className='flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F7FAFF] p-[1px]'>
      <Image
        width={100}
        height={100}
        className='h-[18px] w-[18px]'
        unoptimized
        src='/plan/view.svg'
        alt=''
      />
    </div>
  );
};

export const DownloadIcon = () => {
  return (
    <div className='flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F7FAFF] p-[1px]'>
      <Image
        width={100}
        height={100}
        className='h-[18px] w-[18px]'
        unoptimized
        src='/plan/download.svg'
        alt=''
      />
    </div>
  );
};

export const CheckInIcon = () => {
  return (
    <div className='flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F7FAFF] p-[1px]'>
      <Image
        width={100}
        height={100}
        className='h-[18px] w-[18px]'
        unoptimized
        src='/plan/checkin.svg'
        alt=''
      />
    </div>
  );
};

export const CreditCard = () => {
  return (
    <div className='h-[190px]'>
      <Image
        width={100}
        height={100}
        className='h-full w-full object-cover'
        unoptimized
        src='/plan/card.png'
        alt=''
      />
    </div>
  );
};

export const CameraIcon = () => {
  return (
    <div className='w-[17px h-[17px]'>
      <Image
        width={100}
        height={100}
        className='h-full w-full object-cover'
        unoptimized
        src='/plan/camera.svg'
        alt=''
      />
    </div>
  );
};

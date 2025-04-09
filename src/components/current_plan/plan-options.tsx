import { Button } from '<components>/components/ui/button';
import { Check } from 'lucide-react';
import { TypographyH4 } from '../ui/typography';
import ContainerBgWhite from '../ui/container/ContainerBgWhite';
import { CheckInIcon } from '../ui/icons/plan';

export default function PlanOptions() {
  return (
    <>
      <ContainerBgWhite>
        <TypographyH4 className='font-semibold text-[#191D23]'>
          Freemium
        </TypographyH4>
        <div className='mt-2 p-4'>
          <div className='mb-3 space-y-2'>
            <div className='flex gap-x-1'>
              <h3 className='text-4xl font-bold text-[#1A4075]'>$0</h3>
              <p className='flex items-end justify-end text-end text-[16px] text-[#667085]'>
                / Month
              </p>
            </div>
            <p className='text-[16px] text-[#667085]'>Free Always</p>
          </div>

          <Button className='w-full rounded-full bg-[#49A45A] py-2 text-[16px] font-[700] text-[#fff] hover:bg-green-700'>
            Current Plan
          </Button>

          <div className='mt-6'>
            <h4 className='mb-3 font-[20px] text-[#191D23]'>Plan Includes</h4>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-3'>
                <CheckInIcon />
                <span>20 Searches Per Day</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckInIcon />
                <span>Feature 2</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckInIcon />
                <span>Feature 3</span>
              </li>
            </ul>
          </div>
        </div>
      </ContainerBgWhite>

      <ContainerBgWhite>
        <TypographyH4 className='font-semibold text-[#191D23]'>
          Standard Plan
        </TypographyH4>
        <div className='mt-2 p-4'>
          <div className='mb-3 space-y-2'>
            <div className='flex gap-x-1'>
              <h3 className='text-4xl font-bold text-[#1A4075]'>$9</h3>
              <p className='flex items-end justify-end text-end text-[16px] text-[#667085]'>
                / Month
              </p>
            </div>
            <div className='flex gap-x-1'>
              <p className='text-[16px] text-[#667085] line-through'>
                $108 /Year
              </p>
              <p className='text-[16px]'>
                $99 / Yearly{' '}
                <span className='text-[#1A4075]'>(8.33% Savings)</span>{' '}
              </p>
            </div>
          </div>

          <Button className='w-full rounded-full bg-[#1A4075] py-2 text-[16px] font-[700] text-[#fff] hover:bg-blue-950'>
            Upgrade Plan
          </Button>
          <div className='mt-6'>
            <h4 className='mb-3 font-[20px] text-[#191D23]'>Plan Includes</h4>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-3'>
                <CheckInIcon />
                <span>Unlimited Searches Per Day</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckInIcon />
                <span>Feature 2</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckInIcon />
                <span>Feature 3</span>
              </li>
            </ul>
          </div>
        </div>
      </ContainerBgWhite>
    </>
  );
}

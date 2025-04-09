import { Button } from '<components>/components/ui/button';
import { TypographyH3, TypographyH4 } from '../ui/typography';

interface PlanDetailsHeaderProps {
  currentPlan: string;
  planCost: string;
  renewalDate: string;
}

export default function PlanDetailsHeader({
  currentPlan,
  planCost,
  renewalDate
}: PlanDetailsHeaderProps) {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between'>
        <TypographyH3 className='font-[700]'>Plan Details</TypographyH3>
        <Button
          variant='outline'
          className='text-primary border border-[#A4B7D1] text-[16px] font-[400]'
        >
          Upgrade Plan
        </Button>
      </div>

      <div className='mt-3 pb-4'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex items-center gap-2'>
            <p className='text-[16px] text-[#052326]'>Current Plan:</p>
            <p className='text-[16px] font-[400] text-[#596084]'>
              {currentPlan}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-[16px] text-[#052326]'>Plan Cost:</p>
            <p className='text-[16px] font-[400] text-[#596084]'>{planCost}</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-[16px] text-[#052326]'>Renewal Date:</p>
            <p className='text-[16px] font-[400] text-[#596084]'>
              {renewalDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

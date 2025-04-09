import { Button } from '<components>/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { TypographyH4 } from '../ui/typography';
import { DownloadIcon, ViewIcon } from '../ui/icons/plan';

export default function BillingHistory() {
  const billingHistory = [
    { date: '23/06/2024', plan: 'Freemium', amount: '$0' },
    { date: '23/06/2023', plan: 'Standard', amount: '$99' },
    { date: '23/06/2022', plan: 'Standard', amount: '$0' },
    { date: '23/06/2021', plan: 'Freemium', amount: '$99' },
    { date: '23/05/2021', plan: 'Freemium', amount: '$99' }
  ];

  return (
    <div>
      <div className='p-4'>
        <TypographyH4 className='font-semibold text-[#191D23]'>
          Billing History
        </TypographyH4>
      </div>
      <div className='overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-[#E9EDF4] bg-[#E9EDF4]'>
                <th className='px-4 py-3 text-left text-[14px] font-[700] text-[#202C4B]'>
                  Billing Date
                </th>
                <th className='px-4 py-3 text-left text-[14px] font-[700] text-[#202C4B]'>
                  Subscription Plan
                </th>
                <th className='px-4 py-3 text-left text-[14px] font-[700] text-[#202C4B]'>
                  Amount
                </th>
                <th className='px-4 py-3 text-left text-[14px] font-[700] text-[#202C4B]'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item, index) => (
                <tr
                  key={index}
                  className='border-b border-[#E9EDF4] text-[14px] text-[#202C4B]'
                >
                  <td className='px-4 py-3'>{item.date}</td>
                  <td className='px-4 py-3'>
                    <span
                      className={`rounded px-2 py-1 text-[14px] ${
                        item.plan === 'Freemium'
                          ? 'bg-[#E8EAFF] text-[#154A91]'
                          : 'bg-[#EEFFE8] text-[#207900]'
                      }`}
                    >
                      {item.plan}
                    </span>
                  </td>
                  <td className='px-4 py-3'>{item.amount}</td>
                  <td className='px-4 py-3'>
                    <div className='flex space-x-2'>
                      <Button variant='ghost' size='icon2'>
                        <DownloadIcon />
                      </Button>
                      <Button variant='ghost' size='icon2'>
                        <ViewIcon />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

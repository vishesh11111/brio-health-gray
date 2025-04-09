'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '<components>/components/ui/button';
import { Input } from '<components>/components/ui/input';
import { Label } from '<components>/components/ui/label';
import ContainerBgWhite from '../ui/container/ContainerBgWhite';
import { TypographyH4 } from '../ui/typography';
import { CreditCard, WifiCardIcon } from '../ui/icons/plan';

type CardFormValues = {
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
  cardNumber: string;
};

export default function CardInformation() {
  const [isEditing, setIsEditing] = useState(false);

  const defaultValues = {
    cardHolderName: 'Amitesh Singh',
    expirationDate: '**/**',
    cvv: '***',
    cardNumber: '•••• •••• •••• 1234'
  };

  const { register, handleSubmit, watch } = useForm<CardFormValues>({
    defaultValues
  });

  const watchedValues = watch();

  const toggleEdit = () => setIsEditing(true);

  const onSubmit = (data: CardFormValues) => {
    console.log('Form submitted:', data);
    setIsEditing(false);
  };

  return (
    <ContainerBgWhite>
      <div className='flex items-center justify-between'>
        <TypographyH4 className='font-semibold text-[#191D23]'>
          Card Information
        </TypographyH4>
        {isEditing ? (
          <Button
            variant='outline'
            size='sm'
            onClick={handleSubmit(onSubmit)}
            className='text-primary flex items-center gap-[6px] border-[#A4B7D1] bg-white'
          >
            Save
          </Button>
        ) : (
          <Button
            variant='outline'
            size='sm'
            onClick={toggleEdit}
            className='text-primary flex items-center gap-[6px] border-[#A4B7D1] bg-white'
          >
            Edit
          </Button>
        )}
      </div>
      <div className=''>
        <div className='grid gap-4'>
          <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
            <Label className='text-muted-foreground text-sm'>
              Card Holder Name:
            </Label>
            {isEditing ? (
              <Input {...register('cardHolderName', { required: true })} />
            ) : (
              <p>{defaultValues.cardHolderName}</p>
            )}
          </div>

          <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
            <Label className='text-muted-foreground text-sm'>
              Expiration Date:
            </Label>
            {isEditing ? (
              <Input
                {...register('expirationDate', { required: true })}
                placeholder='MM/YY'
              />
            ) : (
              <p>{defaultValues.expirationDate}</p>
            )}
          </div>

          <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
            <Label className='text-muted-foreground text-sm'>CVV/CVC:</Label>
            {isEditing ? (
              <Input
                {...register('cvv', { required: true })}
                type='password'
                maxLength={3}
              />
            ) : (
              <p>{defaultValues.cvv}</p>
            )}
          </div>

          <div className='relative mt-2 w-full max-w-[366px]'>
            {/* Card background */}
            <div className='relative w-full'>
              <CreditCard />
            </div>

            {/* Card content */}
            <div className='absolute top-0 left-0 h-full w-full p-5 text-white'>
              <div className='flex h-full w-full flex-col justify-between'>
                <div className='flex items-center justify-between pr-5'>
                  <p className='text-lg font-medium'>
                    {watchedValues.cardHolderName ||
                      defaultValues.cardHolderName}
                  </p>
                  <div className='flex items-center'>
                    <WifiCardIcon />
                  </div>
                </div>

                <div className=''>
                  <p className='text-xs tracking-wider'>
                    {(
                      watchedValues.cardHolderName ||
                      defaultValues.cardHolderName
                    ).toUpperCase()}
                  </p>
                  <p className='mt-1 text-xs'>
                    {watchedValues.expirationDate ||
                      defaultValues.expirationDate}
                  </p>
                  <div className='mt-2 flex items-center justify-between'>
                    <p className='text-xs tracking-wider'>
                      {watchedValues.cardNumber || defaultValues.cardNumber}
                    </p>
                    <div className='mr-5 h-8 w-8'>
                      <div className='relative h-full w-full'>
                        <div className='absolute top-0 left-0 h-4 w-4 rounded-full bg-red-500 opacity-70'></div>
                        <div className='absolute top-0 left-2 h-4 w-4 rounded-full bg-yellow-500 opacity-70'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isEditing && (
            <div className='mt-2'>
              <Label className='text-muted-foreground text-sm'>
                Card Number:
              </Label>
              <Input
                {...register('cardNumber', { required: true })}
                placeholder='•••• •••• •••• ••••'
                maxLength={19}
              />
            </div>
          )}
        </div>
      </div>
    </ContainerBgWhite>
  );
}

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '<components>/components/ui/button';
import { Input } from '<components>/components/ui/input';
import { Label } from '<components>/components/ui/label';
import { TypographyH4 } from '../ui/typography';
import ContainerBgWhite from '../ui/container/ContainerBgWhite';

type BillingFormData = {
  firstName: string;
  lastName: string;
  contactNo: string;
  city: string;
  state: string;
  country: string;
  email: string;
  zipCode: string;
  address: string;
};

export default function BillingInformation() {
  const [isEditing, setIsEditing] = useState(false);

  const defaultValues = {
    firstName: 'Jacob',
    lastName: 'Harmsworth',
    contactNo: '+1 2365348624',
    city: 'San Diego',
    state: 'California',
    country: 'United States',
    email: 'Dummymail@gmail.com',
    zipCode: '4845371',
    address: 'Los Angeles, CA 90001'
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BillingFormData>({
    defaultValues
  });

  const toggleEdit = () => {
    setIsEditing(true);
  };

  const onSubmit = (data: BillingFormData) => {
    console.log('Form submitted:', data);
    setIsEditing(false);
  };

  return (
    <ContainerBgWhite>
      <div className='flex items-center justify-between'>
        <TypographyH4 className='font-semibold text-[#191D23]'>
          Billing Information
        </TypographyH4>
        {isEditing ? (
          <Button
            variant='outline'
            size='sm'
            onClick={handleSubmit(onSubmit)}
            className='text-primary flex items-center gap-[6px] border-[#A4B7D1] bg-white'
          >
            {/* <CheckIcon className="h-4 w-4" /> */}
            Save
          </Button>
        ) : (
          <Button
            variant='outline'
            size='sm'
            onClick={toggleEdit}
            className='text-primary flex items-center gap-[6px] border-[#A4B7D1] bg-white'
          >
            {/* <PencilIcon className="h-4 w-4" /> */}
            Edit
          </Button>
        )}
      </div>
      <div className='mt-6'>
        <form>
          <div className='grid grid-cols-2 gap-6'>
            <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
              <Label className='text-[16px] font-[700] text-[#052326]'>
                First Name:
              </Label>
              {isEditing ? (
                <Input {...register('firstName', { required: true })} />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.firstName}
                </p>
              )}
            </div>
            <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
              <Label className='text-[16px] font-[700] text-[#052326]'>
                Last Name:
              </Label>
              {isEditing ? (
                <Input {...register('lastName', { required: true })} />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.lastName}
                </p>
              )}
            </div>
            <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
              <Label className='text-[16px] font-[700] text-[#052326]'>
                Contact No.:
              </Label>
              {isEditing ? (
                <Input {...register('contactNo', { required: true })} />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.contactNo}
                </p>
              )}
            </div>
            <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
              <Label className='text-[16px] font-[700] text-[#052326]'>
                City:
              </Label>
              {isEditing ? (
                <Input {...register('city', { required: true })} />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.city}
                </p>
              )}
            </div>
            <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
              <Label className='text-[16px] font-[700] text-[#052326]'>
                State:
              </Label>
              {isEditing ? (
                <Input {...register('state', { required: true })} />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.state}
                </p>
              )}
            </div>
            <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
              <Label className='text-[16px] font-[700] text-[#052326]'>
                Country:
              </Label>
              {isEditing ? (
                <Input {...register('country', { required: true })} />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.country}
                </p>
              )}
            </div>
            <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
              <Label className='text-[16px] font-[700] text-[#052326]'>
                E-Mail:
              </Label>
              {isEditing ? (
                <Input
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.email}
                </p>
              )}
            </div>
            <div className={`${!isEditing && 'flex items-center space-x-2'}`}>
              <Label className='text-[16px] font-[700] text-[#052326]'>
                Zip Code:
              </Label>
              {isEditing ? (
                <Input {...register('zipCode', { required: true })} />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.zipCode}
                </p>
              )}
            </div>
            <div
              className={`col-span-2 ${!isEditing && 'flex items-center space-x-2'}`}
            >
              <Label className='text-[16px] font-[700] text-[#052326]'>
                Address:
              </Label>
              {isEditing ? (
                <Input {...register('address', { required: true })} />
              ) : (
                <p className='text-[16px] text-[#596084]'>
                  {defaultValues.address}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </ContainerBgWhite>
  );
}

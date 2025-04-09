'use client';

import { useState } from 'react';
import { CheckIcon, Eye, EyeOff, PencilIcon } from 'lucide-react';
import { Button } from '<components>/components/ui/button';
import { Input } from '<components>/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '<components>/components/ui/form';
import { TypographyH2 } from '<components>/components/ui/typography';
import ContainerBox from '<components>/components/ui/container/ContainerBox';

// Form validation schema
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  userName: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
});

type FormValues = z.infer<typeof formSchema>;

const AccountSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Default values for the form
  const defaultValues: FormValues = {
    email: 'Dummymail@gmail.com',
    userName: 'Dummymail@123',
    password: 'password123' // This would typically come from an API
  };

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your API
    setIsEditing(false);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    if (isEditing) {
      // If we're already editing, submit the form
      form.handleSubmit(onSubmit)();
    } else {
      // Otherwise, enter edit mode
      setIsEditing(true);
    }
  };

  return (
    <div className='space-y-8'>
      {/* Account Settings Section */}
      <ContainerBox>
        <div className='mb-3'>
          <TypographyH2 className='text-[#00285D]'>Settings</TypographyH2>
        </div>
        <div className='rounded-2xl bg-[#fff] p-5'>
          <div className='mb-6 flex items-center justify-between'>
            <h2 className='text-primary text-xl font-bold'>Account Settings</h2>
            {isEditing ? (
              <Button
                variant='outline'
                size='sm'
                onClick={form.handleSubmit(onSubmit)}
                className='text-primary flex items-center gap-[6px] border-[#A4B7D1] bg-white'
              >
                <CheckIcon className='h-4 w-4' />
                Save
              </Button>
            ) : (
              <Button
                variant='outline'
                size='sm'
                onClick={toggleEditMode}
                className='text-primary flex items-center gap-[6px] border-[#A4B7D1] bg-white'
              >
                <PencilIcon className='h-4 w-4' />
                Edit
              </Button>
            )}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              {/* Email Field */}
              <div className='flex flex-col sm:flex-row sm:items-center'>
                <span className='min-w-32 font-medium text-gray-700'>
                  Email :
                </span>
                {isEditing ? (
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='flex-1'>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <span className='text-gray-600'>
                    {form.getValues('email')}
                  </span>
                )}
              </div>

              {/* Username Field */}
              <div className='flex flex-col sm:flex-row sm:items-center'>
                <span className='min-w-32 font-medium text-gray-700'>
                  User Name :
                </span>
                {isEditing ? (
                  <FormField
                    control={form.control}
                    name='userName'
                    render={({ field }) => (
                      <FormItem className='flex-1'>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <span className='text-gray-600'>
                    {form.getValues('userName')}
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className='flex flex-col sm:flex-row sm:items-center'>
                <span className='min-w-32 font-medium text-gray-700'>
                  Password :
                </span>
                <div className='flex flex-1 items-center'>
                  {isEditing ? (
                    <FormField
                      control={form.control}
                      name='password'
                      render={({ field }) => (
                        <FormItem className='relative flex-1'>
                          <FormControl>
                            <Input
                              {...field}
                              type={showPassword ? 'text' : 'password'}
                              className='pr-10'
                            />
                          </FormControl>
                          <button
                            type='button'
                            className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <EyeOff className='h-5 w-5' />
                            ) : (
                              <Eye className='h-5 w-5' />
                            )}
                          </button>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : (
                    <>
                      <span className='mr-2 text-gray-600'>
                        {showPassword
                          ? form.getValues('password')
                          : '**************'}
                      </span>
                      <button
                        type='button'
                        className='text-gray-500 hover:text-gray-700'
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeOff className='h-5 w-5' />
                        ) : (
                          <Eye className='h-5 w-5' />
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Hidden submit button for form submission */}
              <button type='submit' className='hidden' />
            </form>
          </Form>
        </div>
      </ContainerBox>

      <ContainerBox>
        <div className='rounded-2xl bg-[#fff] p-5'>
          <h2 className='mb-6 text-xl font-bold text-gray-800'>
            General Settings
          </h2>
          <div className='space-y-6'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <h3 className='font-medium text-gray-700'>Active Account</h3>
                <p className='text-sm text-gray-500'>
                  You are signed in as dummymail123
                </p>
              </div>
              <Button className='bg-navy-blue hover:bg-navy-blue/90 bg-primary mt-2 text-white sm:mt-0'>
                Sign Out
              </Button>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <h3 className='font-medium text-gray-700'>Delete Account</h3>
                <p className='text-sm text-gray-500'>
                  Permanently delete your account and data
                </p>
              </div>
              <Button className='bg-navy-blue hover:bg-navy-blue/90 bg-primary mt-2 text-white sm:mt-0'>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </ContainerBox>
      {/* General Settings Section */}
    </div>
  );
};

export default AccountSettings;

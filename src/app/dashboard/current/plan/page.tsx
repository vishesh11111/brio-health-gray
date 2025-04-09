"use client"

import BillingHistory from '<components>/components/current_plan/billing-history';
import BillingInformation from '<components>/components/current_plan/billing-information';
import CardInformation from '<components>/components/current_plan/card-information';
import PlanDetailsHeader from '<components>/components/current_plan/plan-details-header';
import PlanOptions from '<components>/components/current_plan/plan-options';

import ContainerBgWhite from '<components>/components/ui/container/ContainerBgWhite';
import ContainerBox from '<components>/components/ui/container/ContainerBox';
import { TypographyH2 } from '<components>/components/ui/typography';
import React from 'react';

const CurrentPlan = () => {
  return (
    <div className='space-y-5 pb-3'>
      <ContainerBox>
        <div className='mb-3'>
          <TypographyH2 className='text-[#00285D]'>Settings</TypographyH2>
        </div>
        <ContainerBgWhite>
          <PlanDetailsHeader
            currentPlan='Freemium'
            planCost='$0'
            renewalDate='-'
          />
        </ContainerBgWhite>
      </ContainerBox>

      <ContainerBox>
        <div className='grid gap-6 md:grid-cols-2'>
          <PlanOptions />
        </div>
      </ContainerBox>

      <ContainerBox>
        <div className='grid grid-cols-5 gap-6'>
          <div className='col-span-3'>
            <BillingInformation />
          </div>
          <div className='col-span-2'>
            <CardInformation />
          </div>
        </div>
      </ContainerBox>

      <ContainerBox>
        <div className='rounded-2xl bg-white shadow-sm'>
          <BillingHistory />
        </div>
      </ContainerBox>
    </div>
  );
};

export default CurrentPlan;

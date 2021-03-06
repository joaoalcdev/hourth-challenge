/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { HomeSection } from '../src/components/HomeSection/index';
import { Benefits } from '../src/components/Benefits/index';
import { PricingCard } from '../src/components/PricingCard/index';
import { ServiceSection } from '../src/components/ServiceSection/index';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> DroplinkFy | Clone Code Challenge </title>
      </Head>
      <HomeSection />
      <Benefits />
      <PricingCard />
      <ServiceSection />
    </>
  )
}

export default Home

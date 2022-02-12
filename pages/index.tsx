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
        <title> DroplinkFy | Clone Code Challenge</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <HomeSection />
      <Benefits />
      <PricingCard />
      <ServiceSection />
    </>
  )
}

export default Home

import React from 'react';
import type { NextPage } from 'next';
import "isomorphic-fetch";
import Head from 'next/head';
import Link from 'next/link';

import { HomeSection } from '../src/components/HomeSection/index';
import { Benefits } from '../src/components/Benefits/index';
import { PricingCard } from '../src/components/PricingCard/index';
import { ServiceSection } from '../src/components/ServiceSection/index';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> DroplinkFy | Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection />
      <Benefits />
      <PricingCard />
      <ServiceSection />
    </>
  )
}

export default Home

import React from 'react';
import type { NextPage } from 'next';
import "isomorphic-fetch";
import Head from 'next/head';
import Link from 'next/link';

import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;
const Container = styled.div`
  text-align: center;
`;

import { Navbar } from '../src/components/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> DropLinkFy </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>
      </Container>

    </>
  )
}

export default Home

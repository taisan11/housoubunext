// pages/index.tsx
import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppShell, Aside, MediaQuery } from '@mantine/core'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const Home: NextPage = () => {
  return (
    <>
      <Head><title>Home</title></Head>
      <AppShell 
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<Header/>}
        navbar={<Navbar />} 
        footer={<Footer/>} 
      >
      </AppShell>
      <h1>やあやあ</h1>
      <p>いぇすとだ</p>
      <p>誤字りまくり</p>
      <p>テストなんだよW</p>
    </>
  )
}

'use Client'
// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppShell} from '@mantine/core'
import HomeHeader from '../components/header'
import HomeNavbar from '../components/navbar'
import HomeFooter from '../components/footer'
import { use } from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Head><title>Home</title></Head>
      <AppShell 
        header={<HomeHeader/>} 
        navbar={<HomeNavbar/>} 
        footer={<HomeFooter/>} 
      >
      </AppShell>
      <h1>やあやあ</h1>
      <p>いぇすとだ</p>
      <p>誤字りまくり</p>
      <p>テストなんだよW</p>
    </>
  )
}

export default Home
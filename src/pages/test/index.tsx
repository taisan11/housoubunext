'use client'
import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppShell, createStyles, MantineProvider, Flex, Title, Text  } from '@mantine/core'
import { Comp_Navbar } from '../../components/Navbar'
import Header from '../../components/Header'
import { useToggle } from '@mantine/hooks';
import Navbar from '../components/navbar'
import Footer from '../components/footer'



const test: NextPage = () => {
  const [navbarOpened, toggleNavbarOpened] = useToggle([true, false]);
  const onoffNavbar = () =>{toggleNavbarOpened()}
  return (
    <>
      <Head><title>Home</title></Head>
        <AppShell 
        navbar={<Comp_Navbar page="会計" navbarOpened={navbarOpened} />}
        header={
          <Header 
            navbarOpened={navbarOpened}
            onoffNavbar={onoffNavbar}
          />} 
        >
        </AppShell>
          <Flex
          mih={50}
          gap="sm"
          justify="flex-end"
          align="center"
          direction="column"
          wrap="wrap">
          <Title order={1}>テストページだお</Title>
          <Text>やあやあ</Text>
          <Text>いぇすとだ</Text>
          <Text>誤字りまくり</Text>
          <Text>テストなんだよW</Text>
        </Flex>
    </>
  )
}
export default test;

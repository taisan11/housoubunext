import {  Navbar, ScrollArea, Chip, Title, Divider} from "@mantine/core"
import React from 'react';
import Link from 'next/link'
import { AppShell, Aside, MediaQuery } from '@mantine/core';

const nav_width={
    sm:200,//画面幅がテーマのブレークポイントsmを超える時
    base:150//上記以外。デフォルト100％幅
}

const HomeNavbar = ()=>{
    return(
        <Navbar p="sm" width={nav_width}>
            <Navbar.Section>
                <Title mt ="sm" order={5}>検索したいタグ</Title>
                <p>テスト</p>
                <Link href="/"></Link>
                <Link href="test">testpage</Link>
            </Navbar.Section>
        </Navbar>

    )
}
export default HomeNavbar
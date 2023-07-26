'use client'
import { useState } from 'react';
import { createStyles, Navbar, Group, getStylesRef, rem, Title, Burger  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconCalculator,
    IconReceipt2,
    IconLogout,
    IconUserCircle,
    IconSettings,
    IconActivity,
    IconHelp,
} from '@tabler/icons-react';
import Link from 'next/link';


const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: "green.9" }).background,
    },

    version: {
        backgroundColor: theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
            0.1
        ),
        color: theme.white,
        fontWeight: 700,
    },

    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
            0.1
        )}`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
            0.1
        )}`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.white,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
            0.1
            ),
        },
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.white,
        opacity: 0.75,
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
            0.15
            ),
            [`& .${getStylesRef('icon')}`]: {
            opacity: 0.9,
            },
        },
    },
}));
// export function Comp_Navbar({page, username,}:{page: string, username?:string})
export function Comp_Navbar({page}:{page: string}) {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(page);
    // menu一覧
    const data = [
        { link: '/', label: '会計', icon: IconCalculator },
        { link: '/test', label: 'test', icon: IconReceipt2 },
        { link: '/setting', label: '店舗設定', icon: IconSettings },
        { link: '/contact', label: '困った時は', icon: IconHelp },
        { link: 'https://stats.uptimerobot.com/qWXkvcLPmk', label: 'ステータスページ', icon: IconActivity }
    ];
    
    const links = data.map((item) => (
    <Link
        className={cx(classes.link, { [classes.linkActive]: item.label === active })}
        href={item.link}
        key={item.label}
    >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
    </Link>
    ));
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';
    const nav_width={
        sm:200,//画面幅がテーマのブレークポイントsmを超える時
        base:150//上記以外。デフォルト100％幅
    }
    
    export type HomeNavbarProps = {
        navbarOpened:boolean
    }
    
    const HomeNavbar = ({navbarOpened}:HomeNavbarProps)=>{
    
        if(navbarOpened){
            nav_width.base=150
        }else{
            nav_width.base=1
        }

    return (
        <Navbar hidden={!navbarOpened} p="sm" width={nav_width} className={classes.navbar} fixed={ true }>
            <Navbar.Section grow>
            <Group className={classes.header} position="apart">
                <Title order={4} color='#fff'>{"YSBC Dev"}</Title>
                <Burger opened={opened} onClick={toggle} aria-label={label} />
            </Group>
            {links}
            </Navbar.Section>
            {/* ユーザー関係の物後々追加予定 */}
            {/* <Navbar.Section className={classes.footer}>
                <div className={classes.link}>
                    <IconUserCircle className={classes.linkIcon} stroke={1.5} />
                    <span>{username}</span>
                </div>
                <a href="#" className={classes.link} onClick={() => signOut({redirect: true, callbackUrl: "/auth/signout"})}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>ログアウト</span>
                </a>
            </Navbar.Section> */}
        </Navbar>
    );
}
export default Navbar
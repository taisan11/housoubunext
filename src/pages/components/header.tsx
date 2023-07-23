'use client'
import { Burger, Header, Title ,ActionIcon, SimpleGrid} from "@mantine/core"
// import { IconSun } from '@tabler/icons';
import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme, _params, getRef) => ({
    burgerArea:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
    },
    titleArea:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconArea:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
    },
}))

const HomeHeader= ()=>{

    const { classes } = useStyles();

    return(
        <Header m="sm" height={50}>
            <SimpleGrid cols={3}>
                <div className={classes.burgerArea}>
                    <Burger opened={false}/>
                </div>
                <div className={classes.titleArea}>
                    <Title order={3}>YSBCDev</Title>
                </div>
            </SimpleGrid>
        </Header>
    )
}
export default HomeHeader

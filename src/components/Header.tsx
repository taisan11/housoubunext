import { Header, SimpleGrid,Title ,createStyles  } from "@mantine/core" 
import MenuBurger from "./burger"
import {MenuBurgerProps} from "./burger"



const HomeHeader = ({navbarOpened, onoffNavbar}:MenuBurgerProps)=>{

    // const {classes} = useStyles()

    return(
        <Header p="sm" height={50}>
            <SimpleGrid cols={2}>
                    <MenuBurger 
                        navbarOpened={navbarOpened}
                        onoffNavbar={onoffNavbar}/>
                    <Title order={3}>放送部 Dev</Title>
            </SimpleGrid>
        </Header>
    )
}
export default HomeHeader
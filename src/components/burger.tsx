import { Burger } from "@mantine/core"
import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({

    burger:{
        [theme.fn.largerThan(600)]:{
            display:"none"
        }
    }
}))

export type MenuBurgerProps = {
    navbarOpened:boolean
    onoffNavbar:()=>void
}

const MenuBurger = ({navbarOpened,onoffNavbar}:MenuBurgerProps) =>{
    const {classes} = useStyles()

    return(
        <>
        <Burger className={classes.burger} 
            opened={navbarOpened}
            onClick={()=>{onoffNavbar()}}/>
        </>
    )
}

export default MenuBurger
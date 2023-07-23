import {  Navbar, ScrollArea, Chip, Title, Divider} from "@mantine/core"
 
const nav_width={
    sm:200,//画面幅がテーマのブレークポイントsmを超える時
    base:150//上記以外。デフォルト100％幅
}

const HomeNavbar = ()=>{
    return(
        <Navbar p="sm" width={nav_width}>
            <Navbar.Section>
                <Title mt ="sm" order={5}>検索したいタグ</Title>
                <ScrollArea mt="sm" style={{ height: 300 }}>
                    <Chip mt="sm">python</Chip>
                    <Chip mt="sm">react</Chip>
                    <Chip mt="sm">flask</Chip>
                    <Chip mt="sm">Nextjs</Chip>
                    <Chip mt="sm">pytorch</Chip>
                    <Chip mt="sm">opencv</Chip>
                    <Chip mt="sm">numpy</Chip>
                    <Chip mt="sm">pandas</Chip>
                </ScrollArea>
            </Navbar.Section>
        </Navbar>

    )
}
export default HomeNavbar
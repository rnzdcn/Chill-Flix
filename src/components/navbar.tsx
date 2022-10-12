import Image from "next/image";
import brandLogo from '/public/assets/logo/chillflix_logo.png'
import {Box, Container, Flex, Button, useBreakpointValue} from "@chakra-ui/react";
import stl from '../styles/Components/navbar.module.scss'
import Link from "next/link";

const Navbar = () => {
  const mobileView = useBreakpointValue({base:false, sm:true})
  return(
    <Box as={'nav'} className={stl.nav}>
      <Container className={stl.nav_container} maxW={'container.xl'}>
        <Flex className={stl.flex}>
          <Link href={''} passHref>
            <Box className={stl.brand_link}>
              <Image src={brandLogo} alt={'Brand Logo'}/>
            </Box>
          </Link>

          <Box className={stl.nav_list_container}>
            {/*<Box className={stl.link}>*/}
            {/*  <Link href={''} passHref>*/}
            {/*    Movies*/}
            {/*  </Link>*/}
            {/*</Box>*/}

            {
              mobileView &&
              <Button className={stl.btn_link}>
                Sign in
              </Button>
            }

          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
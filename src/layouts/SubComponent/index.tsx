import {Box, Container, Heading, Input, InputGroup, InputRightElement, Text, Button} from "@chakra-ui/react";
import stl from "../../styles/Layouts/sub_component.module.scss";

import Navbar from "../../components/navbar";

import {Children} from "../../types/Children";

const SubComponent = ({children}: Children) => {
  return(
    <Box className={stl.main}>
      <Box className={stl.banner_area}>
        <Navbar/>

        <Box className={stl.content_area}>
          <Container maxW={"container.xl"} className={stl.content}>
            <Heading className={stl.title}>Unlimited movies, TV shows and more.</Heading>
            <Text className={stl.subtitle}>Watch anywhere. Cancel anytime.</Text>

            <Box className={stl.form_control}>
              <Text className={stl.label}>Ready to watch? Enter your email and create or restart your membership</Text>
              <InputGroup className={stl.input_group} size='md'>
                <Input
                  className={stl.input}
                  type={'email'}
                  placeholder='Email address'
                />
                <InputRightElement className={stl.input_right_element}>
                  <Button className={stl.btn_get_started}>
                    Get Started
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Container>
        </Box>
      </Box>

      {children}
    </Box>
  )
}

export default SubComponent
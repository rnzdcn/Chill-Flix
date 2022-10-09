import Head from "next/head";

import {Box} from "@chakra-ui/react";
import stl from '../../styles/Layouts/main_component.module.scss'

import {MainComponent} from "./types";

const MainComponent = ({children, title}:MainComponent) => {
  return(
    <Box className={stl.main_wrapper}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Check the current weather status" />
        <meta name="viewport" content="wi dth=device-width, initial-scale=1, viewport-fit=cover"/>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      {children}

    </Box>
  )
}

export default MainComponent
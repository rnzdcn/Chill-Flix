import type { NextPage } from 'next'

import MainComponent from "../layouts/MainComponent";
import {Box, Container, Text, Heading, Flex, IconButton} from "@chakra-ui/react";
import stl from "../styles/Home.module.scss"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import SubComponent from "../layouts/SubComponent";
import {useContext} from "react";
import {MovieDBContext} from "../providers/MovieDBProvider";
import MovieCard from "../components/movieCard";

const Home: NextPage = () => {
  const {trendingMovies, page, setPage} = useContext(MovieDBContext)

  const nextPage = (event:any) => {
    event.preventDefault()
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
  }

  return (
    <MainComponent title={'Home | ChillFlix'}>
      <SubComponent>
        <Container className={stl.container} maxW={'container.xl'}>
          <Flex className={stl.flex_header}>
            <Box className={stl.heading}>
              <Heading className={stl.header}>{`Fan favorites`}</Heading>
              <Text className={stl.sub_header}>{`This week's top movies`}</Text>
            </Box>

            <Box className={stl.btn_pagination_container}>
              <IconButton
                className={stl.iconBtn}
                disabled={page === 1}
                aria-label='Previous Icon'
                size={{base: 'sm', lg: 'md'}}
                icon={<ChevronLeftIcon/>}
                onClick={() => prevPage()}
              />

              <IconButton
                className={stl.iconBtn}
                colorScheme='teal'
                aria-label='Previous Icon'
                size={{base: 'sm', lg: 'md'}}
                icon={<ChevronRightIcon/>}
                onClick={(e) => nextPage(e)}
              />
            </Box>
          </Flex>

          <Box className={stl.flex}>
            {
              trendingMovies.isSuccess &&
              trendingMovies.data.results.map((result:any) => {
                return(
                  <MovieCard key={result.id} id={result.id} title={result.title} poster_url={result.poster_path} ratings={result.vote_average}/>
                )
              })
            }
          </Box>

        </Container>
      </SubComponent>
    </MainComponent>
  )
}

export default Home

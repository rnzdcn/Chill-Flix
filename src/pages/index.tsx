import type { NextPage } from 'next'

import MainComponent from "../layouts/MainComponent";
import {Box, Container, Text, Heading} from "@chakra-ui/react";
import stl from "../styles/Home.module.scss"

import SubComponent from "../layouts/SubComponent";
import {useContext} from "react";
import {MovieDBContext} from "../providers/MovieDBProvider";
import MovieCard from "../components/movieCard";

const Home: NextPage = () => {
  const {trendingMovies} = useContext(MovieDBContext)
  console.log(trendingMovies.data)
  return (
    <MainComponent title={'Home | ChillFlix'}>
      <SubComponent>
        <Container className={stl.container} maxW={'container.xl'}>
          <Box className={stl.heading}>
            <Heading className={stl.header}>{`Fan favorites`}</Heading>
            <Text className={stl.sub_header}>{`This week's top movies`}</Text>
          </Box>


          <Box className={stl.flex}>
            {
              trendingMovies.isSuccess &&
              trendingMovies.data.results.map((result:any) => {
                return(
                  <MovieCard key={result.id} title={result.title} poster_url={result.poster_path} ratings={result.vote_average}/>
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

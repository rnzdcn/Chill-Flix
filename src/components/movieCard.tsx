import {Box, Flex, Text, useBreakpointValue} from "@chakra-ui/react";
import Image from "next/image";
import _ from 'lodash'

import stl from '../styles/Components/card.module.scss'
import starIcon from '../../public/assets/icons/star.svg'

interface IMovieCardProps{
  title: string
  poster_url: string
  ratings: number
}

const MovieCard = ({ title, poster_url, ratings}: IMovieCardProps) => {
  const mobileView = useBreakpointValue({base:false, sm:true})

  return(
    <Flex className={stl.flex}>
      <Box className={stl.wrapper}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_url}`}
          alt={`${title} Poster`}
          width={!mobileView ? 150 : 200}
          height={!mobileView ? 200 : 250}
        />

        <Box className={stl.content}>
          <Flex className={stl.flex_content}>
            <Image src={starIcon} alt={'Star Icon'}
                   color={'red'}
                   width={!mobileView ? 15 : 20}
                   height={!mobileView ? 20 : 25}/>
          <Text className={stl.ratings}>{_.round(ratings, 2).toFixed(1)}</Text>
          </Flex>
          <Text className={stl.title}>{title}</Text>

        </Box>
      </Box>
    </Flex>
  )
}

export default MovieCard
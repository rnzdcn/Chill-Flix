import {useContext} from "react";
import _ from 'lodash'

import {Box, Flex, Text, useBreakpointValue, useDisclosure} from "@chakra-ui/react";
import Image from "next/image";

import stl from '../styles/Components/card.module.scss'
import starIcon from '../../public/assets/icons/star.svg'

import ModalMovie from "./modalMovie";

import {MovieDBContext} from "../providers/MovieDBProvider";

interface IMovieCardProps{
  id: number
  title: string
  poster_url: string
  ratings: number
}

const MovieCard = ({ id, title, poster_url, ratings}: IMovieCardProps) => {
  const {fetchMovieById} = useContext(MovieDBContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const mobileView = useBreakpointValue({base:false, sm:true})

  return(
    <Flex
      className={stl.flex}
      onClick={() => {
        fetchMovieById.mutate({id})
        onOpen()
      }
      }>
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
      <ModalMovie movieData={fetchMovieById.data} isOpen={isOpen} onClose={onClose}/>
    </Flex>
  )
}

export default MovieCard
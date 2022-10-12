import React, {useContext} from "react";
import _ from 'lodash'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  Image,
  Text,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react'
import stl from '../styles/Components/modalMovie.module.scss'

import {MovieDBContext} from "../providers/MovieDBProvider";
import {Share} from "@capacitor/share";

interface IModalMovie {
  isOpen: boolean
  onClose: () => void
  movieData: any
}

const ModalMovie:React.FC<IModalMovie> = ({isOpen, onClose, movieData}) => {
  const {fetchMovieById} = useContext(MovieDBContext)
  const isMobile = useBreakpointValue({base:true, sm: false}, {ssr:false})
  const share = async (movie: any) => {
    await Share.share({
      title: movie.title,
      text: movie.overview,
      dialogTitle: 'Share with your friends'
    })
  }

  return(
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"5xl"}>
      <ModalOverlay className={stl.modalOverlay} />
      <ModalContent className={stl.content}>
        <ModalBody className={stl.body}>
          {
            fetchMovieById.isSuccess &&
            <Flex className={stl.flex}>
              <Box className={stl.img_container}>
                <Image
                  className={stl.img}
                  src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                  alt={`${movieData.title} Poster`}
                />
              </Box>

              <Box className={stl.desc_container}>
                <Flex className={stl.desc_flex}>

                  <Flex className={stl.header_flex}>
                    <Box className={stl.wrapper}>
                      <Text className={stl.title}>{movieData.title}</Text>
                      <Flex className={stl.img_wrapper}>
                        <Image className={stl.star_icon} src={'assets/icons/star.svg'} alt={'Star Icon'}/>
                        <Text className={stl.ratings}>{_.round(movieData.vote_average, 2).toFixed(1)}</Text>
                      </Flex>
                    </Box>

                    {
                      isMobile &&
                        <IconButton
                          className={stl.icon_btn}
                          aria-label='Previous Icon'
                          size={{base: 'sm', lg: 'md'}}
                          onClick={() => share(movieData)}
                        >
                          <Image src={'/assets/icons/share.svg'} alt={'share icon'}/>
                        </IconButton>
                    }

                  </Flex>

                  <Text className={stl.overview}>Overview</Text>
                  <Text className={stl.overview_desc}>{movieData.overview}</Text>
                </Flex>
              </Box>
            </Flex>

          }
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalMovie
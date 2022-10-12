import fetch from "node-fetch";
import React, {createContext} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";

import {Children} from "../../types/Children";
import {IMovieDBProvider} from "./types";
import {useToast} from "@chakra-ui/react";

export const MovieDBContext = createContext({} as IMovieDBProvider)

const MovieDBProvider = ({children}: Children) => {
  const [page, setPage] = React.useState<number>(1)
  const toast = useToast()

  const trendingMovies = useQuery(['trending-movies', page], async () => {
    return await (await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&page=${page}`)).json() as any
  },{
    enabled: Boolean(page),
    refetchOnWindowFocus: 'always'
  })

  const searchMovies = useQuery(['search-movies'], async () => {
    return await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&query=Thor`)).json() as any
  },{
    refetchOnWindowFocus: 'always'
  })

  const fetchMovieById = useMutation<void, any, {id:number}, void>(['get-movie-by-id'], async ({id}) => {
    return await (await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=en-US`)).json() as any
  },{
    onSuccess: () => {

    },
    onError: (error, variables, context) => {
      toast({
        title: 'Something went wrong',
        description: error.message,
        isClosable: true,
        duration: 3000,
        status: 'error'
      })
    }
  })

  return(
    <MovieDBContext.Provider value={{
      trendingMovies,
      page,
      setPage,
      fetchMovieById
    }}>
      {children}
    </MovieDBContext.Provider>
  )
}

export default MovieDBProvider
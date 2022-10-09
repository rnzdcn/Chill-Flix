import fetch from "node-fetch";
import {createContext} from "react";
import {useQuery} from "@tanstack/react-query";

import {Children} from "../../types/Children";
import {IMovieDBProvider} from "./types";

export const MovieDBContext = createContext({} as IMovieDBProvider)

const MovieDBProvider = ({children}: Children) => {
  const trendingMovies = useQuery(['trending-movies'], async () => {
    return await (await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}`)).json() as any
  },{
    refetchOnWindowFocus: 'always'
  })

  return(
    <MovieDBContext.Provider value={{
      trendingMovies
    }}>
      {children}
    </MovieDBContext.Provider>
  )
}

export default MovieDBProvider
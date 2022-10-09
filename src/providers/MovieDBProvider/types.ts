import {UseQueryResult} from "@tanstack/react-query";

export interface IMovieDBProvider{
  trendingMovies: UseQueryResult<Record<string, any>, any>
}
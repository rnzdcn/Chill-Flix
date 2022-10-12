import {UseMutationResult, UseQueryResult} from "@tanstack/react-query";

export interface IMovieDBProvider{
  trendingMovies: UseQueryResult<Record<string, any>, any>
  page: number
  setPage: (page: number) => void
  fetchMovieById: UseMutationResult<void, any, {id:number}, void>
}
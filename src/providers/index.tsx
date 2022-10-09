import {Children} from "../types/Children";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import MovieDBProvider from "./MovieDBProvider";

const queryClient = new QueryClient()

const Providers = ({children}: Children) => {
  return(
    <QueryClientProvider client={queryClient}>
      <MovieDBProvider>
        {children}
      </MovieDBProvider>
    </QueryClientProvider>
  )
}

export default Providers
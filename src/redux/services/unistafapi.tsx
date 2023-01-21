import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from 'src/routes/api'

export const unistafapi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    endpoints: (builder) => ({
      getFaculties: builder.query({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  })

  const {useGetFacultiesQuery} = unistafapi
  
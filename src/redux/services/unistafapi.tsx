import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from 'src/routes/api'

export const unistafapi = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ["Faculties", "Domains"],
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: () => ({}),
})

// export const { useGetFacultiesQuery, useAddFacultiesMutation } = unistafapi

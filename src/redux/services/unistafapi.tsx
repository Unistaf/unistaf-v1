import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from 'src/routes/api'

export const unistafapi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getFaculties: builder.query({
      query: (token: string) => ({
        url: `/faculties`,
        "Authorization": `bearer ${token}`
      })
    }),
    addFaculties: builder.mutation({
      query: (data) => ({
        url: `/faculties`,
        body: data,
      }),
    })
  }),
})

export const { useGetFacultiesQuery, useAddFacultiesMutation } = unistafapi

import { unistafapi } from "./unistafapi";
// import { useGetFacultiesQuery } from 'src/redux/services/unistafapi';


const extendedFacultyApi = unistafapi.injectEndpoints({
    endpoints: (builder) => ({
        getFaculties: builder.query({
            query: ({ token }: { token: string }) => ({
                url: `/faculties`,
                "Authorization": `bearer ${token}`
            }),
            providesTags: ['Faculties']
        }),
        addFaculties: builder.mutation({
            query: ({ data, token }) => ({
                url: `/faculties`,
                method: 'POST',
                body: data,
                headers: {
                    // "Authorization": `bearer ${token}`,
                    'Content-type': 'application/json; charset=UTF-8',
                    "authorization": `bearer ${token}`
                }
            }),
            invalidatesTags: ['Faculties']
        }),

    })
})

export const { useGetFacultiesQuery, useAddFacultiesMutation } = extendedFacultyApi
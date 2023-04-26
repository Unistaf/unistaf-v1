import { unistafapi } from "./unistafapi";

const extendedFacultyApi = unistafapi.injectEndpoints({
    endpoints: (builder) => ({
        getFaculties: builder.query({
            query: ({ token, schoolId }: { token: string, schoolId: number }) => ({
                url: `/facultiesbyschool/${schoolId}`,
                headers: {
                    "accept": "application/json",
                    'content-type': 'application/json',
                    "authorization": `bearer ${token}`,
                }
            }),
            providesTags: ['Faculties']
        }),
        addFaculties: builder.mutation({
            query: ({ data, token }) => ({
                url: `/faculties`,
                method: 'POST',
                body: data,
                headers: {
                    "accept": "application/json",
                    // 'Content-type': 'application/json; charset=UTF-8',
                    "authorization": `bearer ${token}`
                }
            }),
            invalidatesTags: ['Faculties']
        }),

    })
})

export const { useGetFacultiesQuery, useAddFacultiesMutation } = extendedFacultyApi
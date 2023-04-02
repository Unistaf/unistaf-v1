import { unistafapi } from "./unistafapi";


const extendedBrancheApi = unistafapi.injectEndpoints({
    endpoints: (builder) => ({
        getBranches: builder.query({
            query: ({ token }: { token: string }) => ({
                url: `/branches`,
                headers: {
                    "accept": "application/json",
                    'content-type': 'application/json',
                    "authorization": `bearer ${token}`,
                }
            }),
            providesTags: ['Branches']
        }),
        addBranches: builder.mutation({
            query: ({ data, token }) => ({
                url: `/branches`,
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    "authorization": `bearer ${token}`
                }
            }),
            invalidatesTags: ['Branches']
        }),

    })
})

export const { useGetBranchesQuery, useAddBranchesMutation } = extendedBrancheApi
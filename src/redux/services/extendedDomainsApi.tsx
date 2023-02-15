import { unistafapi } from "./unistafapi";


const extendedDomainsApi = unistafapi.injectEndpoints({
    endpoints: (builder) => ({
        getDomaines: builder.query({
            query: ({ token }: { token: string }) => ({
                url: `/domains`,
                headers: {
                    "accept": "application/json",
                    'content-type': 'application/json',
                    "authorization": `bearer ${token}`,
                }
            }),
            providesTags: ['Domains']
        }),
        addDomains: builder.mutation({
            query: ({ data, token }) => ({
                url: `/domains`,
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    "authorization": `bearer ${token}`
                }
            }),
            invalidatesTags: ['Domains']
        }),

    })
})

export const {useGetDomainesQuery} = extendedDomainsApi
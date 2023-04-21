import { unistafapi } from "./unistafapi";


const extendedBrancheApi = unistafapi.injectEndpoints({
    endpoints: (builder) => ({
        getBranches: builder.query({
            query: ({ school, token }: { school: number, token: string }) => ({
                // branches/school/{school}
                url: `/branches/school/${school}`,
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
        editBranche: builder.mutation({
            query: ({ id, data, token }) => {
                // console.log({ data: JSON.stringify(data) });
                return {
                    url: `/branches/${id}`,
                    method: 'PUT',
                    body: data,
                    // responseHandler: (response: { json: () => any }) => response.json(),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        "authorization": `bearer ${token}`
                    }
                }
            },
            invalidatesTags: ['Branches']
        }),
        deleteBranche: builder.mutation({
            query: ({ id, token }) => {
                // console.log({ data: JSON.stringify(data) });
                return {
                    url: `/branches/${id}`,
                    method: 'DELETE',
                    // responseHandler: (response: { json: () => any }) => response.json(),
                    headers: {
                        'Content-type': 'application/json',
                        "authorization": `bearer ${token}`
                    }
                }
            },
            invalidatesTags: ['Branches']
        })

    })
})

export const { useGetBranchesQuery, useAddBranchesMutation, useEditBrancheMutation, useDeleteBrancheMutation } = extendedBrancheApi
import {api} from "./apiSlice";

const utilsApiSlices = api.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: ({data, id, token}) => ({
                url: `user-profile/${id}/`,
                method: "PATCH",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        // getUser: builder.query({
        //     query: (emial) => ({
        //         url: `user/${emial}`,
        //     }),
        // }),
    }),
});

export const {useGetUserQuery, useUpdateProfileMutation} = utilsApiSlices;

import {api} from "./apiSlice";

const utilsApiSlices = api.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: ({formData, id}) => ({
                url: `user-profile/${id}/`,
                method: "PATCH",
                body: formData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
        }),
        getLocations: builder.query({
            query: () => ({
                url: `location/`,
            }),
        }),
    }),
});

export const {useGetLocationsQuery, useUpdateProfileMutation} = utilsApiSlices;

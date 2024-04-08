import {api} from "./apiSlice";

const propertiesApiSlices = api.injectEndpoints({
    endpoints: (builder) => ({
        uploadProperty: builder.mutation({
            query: (data) => ({
                url: `host/property/`,
                method: "POST",
                body: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
            invalidatesTags: ["properties"],
        }),
        deleteProperty: builder.mutation({
            query: ({id}) => ({
                url: `host/property/${id}/`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${
                        localStorage.getItem("snugstuff_access_token") || ""
                    }`,
                },
            }),
            invalidatesTags: ["properties"],
        }),
        getAllProperties: builder.query({
            query: () => ({
                url: `property`,
            }),
        }),
        getPropertyDetails: builder.query({
            query: ({slug}) => ({
                url: `property/${slug}/`,
            }),
        }),
        getPropertiesCategory: builder.query({
            query: () => ({
                url: `category`,
            }),
        }),
        getPropertiesAminity: builder.query({
            query: () => ({
                url: `aminities`,
            }),
        }),
        getPropertiesByHost: builder.query({
            query: () => ({
                url: `host/property/`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
            providesTags: ["properties", "subscriptions"],
        }),
    }),
});

export const {
    useGetAllPropertiesQuery,
    useGetPropertyDetailsQuery,
    useUploadPropertyMutation,
    useGetPropertiesCategoryQuery,
    useGetPropertiesAminityQuery,
    useGetPropertiesByHostQuery,
    useDeletePropertyMutation,
} = propertiesApiSlices;

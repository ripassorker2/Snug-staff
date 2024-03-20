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
    useUploadPropertyMutation,
    useGetPropertiesCategoryQuery,
    useGetPropertiesAminityQuery,
    useGetPropertiesByHostQuery,
} = propertiesApiSlices;

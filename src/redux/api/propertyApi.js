import {api} from "./apiSlice";

const propertiesApiSlices = api.injectEndpoints({
    endpoints: (builder) => ({
        uploadProperty: builder.mutation({
            query: (data) => ({
                url: `host/property/`,
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
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
    }),
});

export const {
    useGetPropertiesCategoryQuery,
    useGetPropertiesAminityQuery,
    useUploadPropertyMutation,
} = propertiesApiSlices;

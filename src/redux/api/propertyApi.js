import {getToken} from "@/utils/getToken";
import {api} from "./apiSlice";

const propertiesApiSlices = api.injectEndpoints({
    endpoints: (builder) => ({
        uploadProperty: builder.mutation({
            query: (data) => ({
                url: `host/property/`,
                method: "POST",
                body: data,
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }),
            invalidatesTags: ["properties"],
        }),
        uploadPropertyImages: builder.mutation({
            query: (data) => ({
                url: `proprty_image/`,
                method: "POST",
                body: data,
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }),
            invalidatesTags: ["properties"],
        }),
        uploadNewImage: builder.mutation({
            query: (data) => ({
                url: `proprty_image/`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
                body: data,
            }),
        }),
        imageUpdate: builder.mutation({
            query: ({file, imageId}) => ({
                url: `proprty_image/${imageId}/`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
                body: file,
            }),
        }),
        deleteImage: builder.mutation({
            query: ({imageId}) => ({
                url: `proprty_image/${imageId}/`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }),
        }),
        deleteProperty: builder.mutation({
            query: ({id}) => ({
                url: `host/property/${id}/`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
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
                    Authorization: `Bearer ${getToken()}`,
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
    useUploadPropertyImagesMutation,
    useImageUpdateMutation,
    useDeleteImageMutation,
    useUploadNewImageMutation,
} = propertiesApiSlices;

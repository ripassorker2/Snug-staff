import {api} from "./apiSlice";

const subscriptionApiSlices = api.injectEndpoints({
    endpoints: (builder) => ({
        getSubscription: builder.mutation({
            query: (data) => ({
                url: `subscription/subscribe/`,
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
        }),
        successSubscription: builder.mutation({
            query: (data) => ({
                url: `subscription/subscribe_success/`,
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
            invalidatesTags: ["subscriptions", "properties"],
        }),
        getHostSubscription: builder.query({
            query: () => ({
                url: `subscription`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
            providesTags: ["subscriptions"],
        }),
    }),
});

export const {
    useGetSubscriptionMutation,
    useSuccessSubscriptionMutation,
    useGetHostSubscriptionQuery,
} = subscriptionApiSlices;

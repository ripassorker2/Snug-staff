import {api} from "./apiSlice";

const bookingApiSlices = api.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => ({
                url: `booking`,
                method: "POST",
                body: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
        }),
        getBookingForHost: builder.query({
            query: () => ({
                url: `host/booking`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
            providesTags: ["bookings"],
        }),
        approveBooking: builder.mutation({
            query: ({id}) => ({
                url: `booking-payment-send-api/${id}/`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
            invalidatesTags: ["bookings"],
        }),
        cancelBooking: builder.mutation({
            query: ({id, reason}) => ({
                url: `host/booking-cancel-api/${id}/`,
                method: "POST",
                body: {reason},
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "snugstuff_access_token" || ""
                    )}`,
                },
            }),
            invalidatesTags: ["bookings"],
        }),
    }),
});

export const {
    useCreateBookingMutation,
    useGetBookingForHostQuery,
    useApproveBookingMutation,
    useCancelBookingMutation,
} = bookingApiSlices;

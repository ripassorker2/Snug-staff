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
        getLocations: builder.query({
            query: () => ({
                url: `location/`,
            }),
        }),
    }),
});

export const {useCreateBookingMutation} = bookingApiSlices;

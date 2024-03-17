import {config} from "@/envConfig/envConfig";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.base_url}/`,
    }),
    tagTypes: ["properties"],
    endpoints: () => ({}),
});

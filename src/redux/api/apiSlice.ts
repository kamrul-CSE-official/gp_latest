import { getBaseUrl } from "@/helper/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  tagTypes: ["comments"],
  endpoints: () => ({}),
});

export default api;

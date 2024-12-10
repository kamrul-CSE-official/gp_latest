import api from "@/redux/api/apiSlice";

const gatePassRequestApi = api.injectEndpoints({
  endpoints: (builder) => ({
    numberOfRequests: builder.mutation({
      query: (data) => ({
        url: "User/ReqCount",
        method: "POST",
        body: data,
      }),
    }),

    sidebarMenu: builder.mutation({
      query: (data) => ({
        url: "/GatePass/GetUserAccessMenus",
        method: "POST",
        body: data,
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useSidebarMenuMutation,
  useGetSingleProductQuery,
  usePostCommentMutation,
  useNumberOfRequestsMutation
} = gatePassRequestApi;

export default gatePassRequestApi;

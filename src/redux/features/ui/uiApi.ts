import api from "@/redux/api/apiSlice";

const uiApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
  overrideExisting: false,
});

export const {
  useSidebarMenuMutation,
  useGetSingleProductQuery,
  usePostCommentMutation,
} = uiApi;

export default uiApi;

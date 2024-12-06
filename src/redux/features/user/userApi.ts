import api from "@/redux/api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUsers: builder.mutation({
      query: (data) => ({
        url: "/Login/IsValidUserWithJWTToken",
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
  useLoginUsersMutation,
  useGetSingleProductQuery,
  usePostCommentMutation,
} = userApi;

export default userApi;

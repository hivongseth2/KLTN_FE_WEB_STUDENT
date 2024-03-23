import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from '@/features/user/userSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,

  prepareHeaders: (headers) => headers,
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const { user } = api.getState().user;

  args.credentials = 'include';
  let result = await baseQuery(args, api, extraOptions);

  if (args?.login && result?.meta?.response?.status === 200) {
    api.dispatch(setCredentials({ user, ...result.data }));
  }

  if (!args?.login && result?.error?.status === 401) {
    result = api.dispatch(logOut());
  }
  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export default apiSlice;

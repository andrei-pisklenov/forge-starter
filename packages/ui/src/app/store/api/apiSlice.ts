import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fakeBaseQuery(),
  tagTypes: [],
  endpoints: () => ({}),
});

import { apiSlice } from '@/app/store/api/apiSlice';
import { view } from '@forge/bridge';
import type { FullContext } from '@forge/bridge/out/types';

const contextApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getContext: builder.query<FullContext, void>({
      queryFn: async () => {
        try {
          const context = await view.getContext();
          return {
            data: context,
          };
        } catch (error) {
          return { error: String(error) };
        }
      },
    }),
  }),
});

export const { useGetContextQuery } = contextApi;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseQueryOptions, useMutation, useQuery } from 'react-query';

import { AxiosRequestHeaders } from 'axios';
import useAxiosContext from 'contexts/Axios';

interface QueryFunctionContext {
  url: string;
  params?: any;
}
interface MutationFunctionContext {
  url: string;
  method?: 'post' | 'delete';
  headers?: AxiosRequestHeaders;
}

export function useReactQuery<T = any>(
  key: string,
  { url, params = {} }: QueryFunctionContext,
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
  // Get our Axios instance from our previously created Hook
  const axios = useAxiosContext();

  // Create a query with the key `projects`
  return useQuery(
    key,
    async () => {
      // Fetch data from our API using Axios. We'll talk about the typing below
      const { data } = await axios.get(url, {
        params: params,
      });

      // Return the data from the Axios response
      return data;
    },
    options
  );
}

export function useReactMutation<D = any>({
  url,
  method = 'post',
  headers = {},
}: MutationFunctionContext) {
  const axios = useAxiosContext();

  return useMutation(async (data?: D) => {
    switch (method) {
      case 'post':
        return await axios.post(url, data, { headers: headers });
      case 'delete':
        return await axios.delete(url, data);
    }
  });
}

import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { createContext, useContext, useMemo } from 'react';
import { refresh, refreshErrorHandle } from 'lib/refresh';
import useAppContext, { actions } from 'contexts/App';

import { API_HOST } from 'constants/Api';

export const AxiosContext = createContext<AxiosInstance>(undefined);

export function AxiosProvider({ children }: React.PropsWithChildren<unknown>) {
  const { store, dispatch } = useAppContext();
  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: API_HOST,
    });
    axios.interceptors.request.use((config: AxiosRequestConfig) => {
      return refresh(config, dispatch, actions, store);
    }, refreshErrorHandle);

    return axios;
  }, [store]);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}

export default function useAxiosContext() {
  return useContext(AxiosContext);
}

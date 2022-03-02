import { Action, Actions, Store } from 'contexts/App';
import axios, { AxiosRequestConfig } from 'axios';

import { API_HOST } from 'constants/Api';
import moment from 'moment';

const refresh = async (
  config: AxiosRequestConfig,
  dispatch: React.Dispatch<Action>,
  actions: Actions,
  store: Store
) => {
  const refreshToken = store.RefreshToken;
  const expireAt = store.ExpiresAt;
  let token = store.Authorization;

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    const body = {
      refresh: refreshToken,
    };

    // 토큰 갱신 서버통신
    const { data } = await axios.post(`${API_HOST}/users/token/refresh/`, body);
    token = data.access;
    dispatch(actions.setToken(data.access, data.refresh));
  }
  config.headers['Authorization'] = !!token ? `JWT ${token}` : '';

  return config;
};

const refreshErrorHandle = (err: any) => {
  // Cookie.remove("refreshToken");
};

export { refresh, refreshErrorHandle };

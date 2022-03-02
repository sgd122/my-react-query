import { createContext, useContext, useReducer } from 'react';
import { getStorageItem, setStorageItem } from 'hooks/Storage/useLocalStorage';

import moment from 'moment';

export type Action =
  | {
      type: 'APP/SET_TOKEN';
      payload?: any;
    }
  | { type: 'APP/LOGOUT'; payload?: any };

export type Actions = {
  setToken: (
    token: string,
    refreshToken: string
  ) => {
    type: 'APP/SET_TOKEN';
    payload: any;
  };
  logout: () => { type: 'APP/LOGOUT' };
};

export type Store = {
  Authorization?: string;
  RefreshToken?: string;
  isAuthenticated?: boolean;
  ExpiresAt?: string;
};

type Context = {
  store?: Store;
  dispatch?: React.Dispatch<Action>;
};

const reducer = (previousState: Store, action: Action) => {
  const { type } = action;

  if (type === SET_TOKEN) {
    const {
      payload: { token: jwtToken, refreshToken },
    } = action;
    const newState: Store = {
      ...previousState,
      Authorization: jwtToken,
      RefreshToken: refreshToken,
      isAuthenticated: true,
      ExpiresAt: moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'),
    };
    setStorageItem('jwtToken', jwtToken);
    setStorageItem('refreshToken', refreshToken);
    setStorageItem(
      'expiresAt',
      moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss')
    );
    return newState;
  } else if (type === LOGOUT) {
    const newState: Store = {
      ...previousState,
      Authorization: '',
      RefreshToken: '',
      isAuthenticated: false,
      ExpiresAt: '',
    };
    setStorageItem('jwtToken', '');
    setStorageItem('refreshToken', '');
    setStorageItem('expiresAt', '');
    return newState;
  }

  return previousState;
};

// Actions
const SET_TOKEN = 'APP/SET_TOKEN';
const LOGOUT = 'APP/LOGOUT';

const AppContext = createContext<Context>({
  store: {
    Authorization: '',
    RefreshToken: '',
    isAuthenticated: false,
    ExpiresAt: '',
  },
  dispatch: undefined,
});

type Props = {
  initialStore?: Store;
};

const AppProvider: React.FC<Props> = ({ children, initialStore }) => {
  const jwtToken = getStorageItem('jwtToken', '');
  const refreshToken = getStorageItem('refreshToken', '');
  const expiresAt = getStorageItem('expiresAt', '');
  const [store, dispatch] = useReducer(reducer, {
    ...initialStore,
    isAuthenticated: jwtToken.length > 0,
    Authorization: jwtToken.length > 0 ? jwtToken : '',
    RefreshToken: refreshToken.length > 0 ? refreshToken : '',
    ExpiresAt: expiresAt,
  });

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Action Creators
const actions: Actions = {
  setToken: (token, refreshToken) => ({
    type: SET_TOKEN,
    payload: { token, refreshToken },
  }),
  logout: () => ({ type: LOGOUT }),
};

export { AppContext, AppProvider, actions };

export default function useAppContext() {
  return useContext(AppContext);
}

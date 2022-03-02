import { HeaderContainer, HeaderLink, WalletButton } from './styles';
import useAppContext, { actions } from 'contexts/App';
import { useReactMutation, useReactQuery } from 'utils/useReactQuery';

import { IUser } from 'api';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { store, dispatch } = useAppContext();
  const navigate = useNavigate();
  const loginApi = '/users/login/';
  const { activateBrowserWallet, account, chainId, deactivate } = useEthers();
  const { data: userData }: { data: IUser } = useReactQuery(
    'login',
    {
      url: loginApi,
    },
    { enabled: false }
  );

  // ANCHOR: 로그인
  const mutationLogin = useReactMutation({
    url: loginApi,
    method: 'post',
  });

  // ANCHOR: 로그인
  const handleLogin = () => {
    activateBrowserWallet();
  };

  // ANCHOR: 로그아웃
  const handleLogOut = () => {
    deactivate();
    dispatch(actions.logout());
  };

  // ANCHOR: 로그인 계정 가져오기
  useEffect(() => {
    if (!store.isAuthenticated) {
      if (account) {
        mutationLogin.mutate({ account: account, chainId: chainId });
      } else {
        deactivate();
      }
    }
  }, [account]);

  // ANCHOR: 로그인 계정 가져오기
  useEffect(() => {
    if (store.isAuthenticated) {
      activateBrowserWallet();
      if (account && account !== userData?.users?.address) {
        mutationLogin.mutate({ account: account, chainId: chainId });
      } else {
        // FIXME: refetch 주석처리
        // refetch();
        console.log('refetch 주석처리');
      }
    }
  }, [account, userData]);

  // ANCHOR: 토큰을 저장하여 로그인 처리
  useEffect(() => {
    if (mutationLogin.isSuccess) {
      dispatch(
        actions.setToken(
          mutationLogin.data.data.access,
          mutationLogin.data.data.refresh
        )
      );
    }
  }, [dispatch, navigate, mutationLogin.isSuccess]);

  useEffect(() => {
    if (store.isAuthenticated) {
      // FIXME: refetch 주석처리
      // post 요청후 refetch로 정보업데이트
      // refetch();
    }
  }, [store.Authorization]);

  return (
    <HeaderContainer>
      <Link to="/" id="logo">
        Happybridge
      </Link>

      <div className="link-containers">
        <HeaderLink>Start Hunting</HeaderLink>
        <HeaderLink>Dark NFTs</HeaderLink>
        <HeaderLink>Community</HeaderLink>
        <HeaderLink>Craft NFT</HeaderLink>

        <WalletButton id="sign-up" onClick={handleLogin}>
          {!store.isAuthenticated ? 'Login' : userData?.users?.address}
        </WalletButton>

        {store.isAuthenticated && (
          <WalletButton id="logout" onClick={handleLogOut}>
            LogOut
          </WalletButton>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;

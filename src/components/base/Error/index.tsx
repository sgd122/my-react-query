import useAppContext, { actions } from 'contexts/App';

import { useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const { deactivate } = useEthers();
  useEffect(() => {
    deactivate();
    dispatch(actions.logout());
    navigate('/');
  }, []);

  return <div>Error</div>;
};

export default Error;

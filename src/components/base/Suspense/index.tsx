import Error from 'components/base/Error';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from 'components/base/Loading';
import React from 'react';
import { Suspense as ReactSuspense } from 'react';

// ANCHOR: Custom Suspense 생성
const Suspense: React.FC = ({ children }) => {
  return (
    <ReactSuspense fallback={<Loading />}>
      <ErrorBoundary fallback={<Error />}>{children}</ErrorBoundary>
    </ReactSuspense>
  );
};

export default Suspense;

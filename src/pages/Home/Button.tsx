import React, { useEffect, useState } from 'react';
import { useReactMutation, useReactQuery } from 'utils/useReactQuery';

import { ListContainer } from './styles';

export default function Button() {
  const [selectedFile, setSelectedFile] = useState(null);

  const { data } = useReactQuery('contracts', {
    url: '/kip17/contract/',
  });

  const mutationNodePost = useReactMutation({
    url: '/node/klaytn/get/balance/',
    method: 'post',
  });

  const mutationMetadataAssetPost = useReactMutation({
    url: '/products/',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  // ANCHOR: JSONRPC호출
  const handleRPC = () => {
    mutationNodePost.mutate({});
  };

  // ANCHOR: 컨트랙트 목록 조회
  const handleContract = () => {
    console.log('::handleContract::');
  };

  // ANCHOR: 이미지 배포
  const handleImageAsset = () => {
    const data = new FormData();
    data.append('file', selectedFile);
    data.append('name', 'test-sgd3');
    data.append('description', 'test-sgd2');
    mutationMetadataAssetPost.mutate(data);
  };

  useEffect(() => {
    console.log('::data::', data);
  }, [data]);

  return (
    <div>
      <p id="card-list-header-text"> Hot Drops </p>
      <ListContainer>
        <div>Button</div>
        <input
          type="file"
          name="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedFile(e.target.files[0])
          }
        />
        <button id="json-rpc" className="wallet" onClick={handleRPC}>
          JSON RPC
        </button>
        <button id="contract" className="wallet" onClick={handleContract}>
          컨트랙트 목록 조회
        </button>
        <button id="contract" className="wallet" onClick={handleImageAsset}>
          이미지 배포(product)
        </button>
      </ListContainer>
    </div>
  );
}

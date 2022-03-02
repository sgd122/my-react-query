import { useReactMutation, useReactQuery } from 'utils/useReactQuery';

import Button from 'components/base/Button';
import { IProduct } from 'api';
import NFTCard from '../../components/NFTCard/index';
import Suspense from 'components/base/Suspense';
import TextInput from 'components/base/TextInput';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Product = () => {
  const { productId } = useParams();
  const { data: product }: { data: IProduct } = useReactQuery('productDetail', {
    url: `/products/${productId}/`,
  });

  // ANCHOR: NFT 팔기
  const mutationNftSellPost = useReactMutation({
    url: `/products/${productId}/sell/`,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('::handle::', productId);
    mutationNftSellPost.mutate({});
  };

  useEffect(() => {
    console.log('::product::', product);
  }, [product]);

  return (
    <Suspense>
      Product: {productId}
      <TextInput value={'11'} />
      <Button textContent={'전송'} onClick={handleClick} />
      <NFTCard item={product} />
    </Suspense>
  );
};

export default Product;

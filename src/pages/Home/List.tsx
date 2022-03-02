import CardList from 'components/CardList';
import { IProduct } from 'api';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useReactQuery } from 'utils/useReactQuery';

const CustomDiv = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

const List = () => {
  const { data: products }: { data: IProduct[] } = useReactQuery('products', {
    url: '/products/',
  });

  useEffect(() => {
    if (products) {
      console.log('::products', products);
    }
  }, [products]);

  return (
    <CustomDiv>
      <header>List</header>
      <CardList list={products} />
    </CustomDiv>
  );
};

export default List;

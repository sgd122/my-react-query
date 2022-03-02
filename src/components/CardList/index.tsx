import { GridContainer } from './styles';
import { IProduct } from 'api';
import NFTCard from 'components/NFTCard';
import React from 'react';

interface ICardListProperties {
  list?: IProduct[];
}

const CardList: React.FC<ICardListProperties> = ({ list = [] }) => {
  return (
    <GridContainer>
      {list.map((item, index: number) => (
        <NFTCard item={item} key={index} />
      ))}
    </GridContainer>
  );
};

export default CardList;

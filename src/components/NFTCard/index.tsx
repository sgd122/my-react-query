import 'styles/NFTCard.css';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import React, { useState } from 'react';

import Button from 'components/base/Button';
import Card from 'components/base/Card';
import { FaEthereum } from 'react-icons/fa';
import { IProduct } from 'api';
import { useNavigate } from 'react-router-dom';

interface INFTCardListProperties {
  item: IProduct;
}
const NFTCard: React.FC<INFTCardListProperties> = ({ item }) => {
  const [isLike, setIsLike] = useState(false);
  const [colors] = useState([]);
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/product/${item.pk}`);
  };

  const like = () => setIsLike(!isLike);

  return (
    <Card
      blurColor={colors[0]}
      onClick={onClick}
      child={
        <>
          <img className="nft-image" src={item.image} />

          <div className="wrapper">
            <div className="info-container">
              <p className="owner"> LEJOURN.DARK.NFT</p>
              <p className="name">Alien Cry</p>
            </div>

            <div className="price-container">
              <p className="price-label">Price</p>
              <p className="price">
                {' '}
                <FaEthereum /> 4.555
              </p>
            </div>
          </div>
          <div className="buttons">
            {/* <button className="buy-now">Buy Now</button> */}
            <Button textContent="Buy Now" />
            <div className="like-container">
              <button className="like" onClick={like}>
                {!isLike ? (
                  <AiOutlineHeart size="30" color="white" />
                ) : (
                  <AiFillHeart
                    size="30"
                    style={{
                      stroke: `-webkit-linear-gradient(
                    to bottom,
                    #38ef7d,
                    #11998e
                  );`,
                    }}
                    color="#00f5c966"
                  />
                )}
              </button>
              <p className="like-count">123</p>
            </div>
          </div>
        </>
      }
    ></Card>
  );
};

export default NFTCard;

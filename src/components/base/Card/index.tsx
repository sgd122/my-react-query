import { CardContainer } from './styles';
import React from 'react';

interface ICardProperties {
  width?: any;
  height?: any;
  child?: any;
  blurColor?: any;
  onClick?: any;
}

const Card: React.FC<ICardProperties> = ({
  width = '250px',
  height = 'auto',
  child,
  blurColor = 'rgba(48,118,234,0.2)',
  onClick,
}) => (
  <CardContainer
    className="card"
    style={{
      width: `${width}`,
      height: `${height}`,
      background: `radial-gradient(
                circle,
                rgba(255, 255, 255, 0.05) 0%,
                ${blurColor} 0%,
                rgba(255, 255, 255, 0.05) 70%
              )`,
    }}
    onClick={onClick}
  >
    {child}
  </CardContainer>
);

export default Card;

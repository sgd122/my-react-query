import React, { useState } from 'react';

import { DefaultButton } from './styles';

interface IButtonProperties {
  width?: any;
  height?: any;
  color?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textColor?: any;
  textContent?: any;
  type?: any;
}

const Button: React.FC<IButtonProperties> = ({
  width = '80px',
  height = '30px',
  color = '#ffffff',
  onClick,
  textColor = 'black',
  textContent = 'Button',
  type = 'button',
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <DefaultButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      type={type}
      style={{
        width: `${width}`,
        height: `${height}`,
        color: `${isHover ? textColor : color}`,
        border: `1px solid ${color}`,
        transition: 'background-color .5 ease-in-out',
        backgroundColor: isHover ? color : 'transparent',
      }}
    >
      {textContent}
    </DefaultButton>
  );
};

export default Button;

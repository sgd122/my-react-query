import React, { useState } from 'react';
import { TextContainer, TextField, TextWrapper } from './styles';

//Base Input Component
//Usage: <Input width='550px' height='30px' />
interface ITextInputProperties {
  width?: any;
  height?: any;
  placeholder?: any;
  icon?: any;
  type?: any;
  onChange?: any;
  value?: any;
}
const TextInput: React.FC<ITextInputProperties> = ({
  width,
  height,
  placeholder = 'default input',
  icon,
  type,
  onChange,
  value,
}) => {
  const [targetValue, setTargetValue] = useState(value);
  const handleChange = (e: { target: { value: any } }) => {
    setTargetValue(e.target.value);
    onChange(e);
  };
  return (
    <TextWrapper>
      <TextContainer
        style={{
          width: `${width}`,
          height: `${height}`,
          background: `radial-gradient(
                    circle,
                    rgba(255, 255, 255, 0.05) 0%,
                    rgba(48,118,234,0.2) 0%,
                    rgba(255, 255, 255, 0.05) 70%
                )`,
        }}
      >
        <TextField
          id="search"
          placeholder={placeholder}
          type={type}
          value={targetValue}
          onChange={handleChange}
        />
        {icon}
      </TextContainer>
    </TextWrapper>
  );
};

export default TextInput;

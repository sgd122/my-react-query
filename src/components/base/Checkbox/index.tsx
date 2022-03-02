import { CheckboxContainer, InputField, InputLabel } from './styles';

import React from 'react';

interface ICheckboxProperties {
  name?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<ICheckboxProperties> = ({ name, value, onChange }) => {
  return (
    <CheckboxContainer className="container">
      <InputLabel className="checkmark">
        <InputField type="checkbox" value={value} onChange={onChange} />
        {name}
      </InputLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;

import 'styles/base/Select.css';

import React, { createRef, useState } from 'react';

interface ISelectProperties {
  items?: any;
  onChange?: any;
}

const Select: React.FC<ISelectProperties> = ({ items, onChange }) => {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const optionRef: any = createRef();

  const setSelect = (value: any) => {
    setValue(value);
    onClick();
    onChange(value);
  };

  const onClick = () => {
    if (!isOpen) {
      optionRef.current.style.display = 'block';
      setOpen(!isOpen);
    } else {
      optionRef.current.style.display = 'none';
      setOpen(!isOpen);
    }
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        type="button"
        aria-haspopup="true"
        onClick={onClick}
      >
        {value ? value : 'Select from Options'}
      </button>
      <ul
        className="dropdown-menu"
        role="listbox"
        aria-expanded="false"
        ref={optionRef}
      >
        {items &&
          items.map(
            (
              item:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal,
              index: number
            ) => (
              <li
                role="option"
                tabIndex={index}
                key={index}
                onClick={() => setSelect(item)}
              >
                {item}
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Select;

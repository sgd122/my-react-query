import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
  height: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size:16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color:#ffff;
`;

export const InputField = styled.input`
  /* position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0; */
  &:checked {
    background-color: transparent;
  }
`;

export const InputLabel = styled.span`
  /* position: absolute;
  top: 0;
  left: 0; */
  height: 25px;
  width: 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 30px;
  backdrop-filter: blur(50px);
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.05) 0%,
    #00f5c966 0%,
    rgba(255, 255, 255, 0.05) 70%
  );
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

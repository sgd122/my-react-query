import styled, { css } from 'styled-components';

import { DefaultButton } from 'components/base/Button/styles';

const HeaderTagA = styled.a`
  margin-left: 30px;
  padding: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: none;
  cursor: pointer;
  transition: border 1.5s ease;
`;

export const HeaderContainer = styled.div`
  height: 77px;
  /* border: 0.001px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  /* position: fixed;
  top: 0;
  z-index: 1;
  right: 0;
  left: 0; */
  background:  ${({ theme }) => theme.colors.white_1};
`;

export const HeaderLink = styled(HeaderTagA)`
  border: 1px solid #100f17;
  border-radius: 30px;
  &:hover{
      ${({ theme }) => {
        const selected = theme.colors.white_1;
        return css`border: 1px solid ${selected};`;
      }}
  }
`;

export const WalletButton = styled(DefaultButton)`
  width: 180px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 50px;
  padding: 10px;
  margin-left: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
`;

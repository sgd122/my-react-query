import { DefaultButton } from 'components/base/Button/styles';
import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 500px;
  text-align: center;
  position: relative;
  background-size: cover;
  margin-top: 13rem;
`;

export const ExploreButton = styled(DefaultButton)`
  width: 180px;
  height: 50px;
  margin-right: 20px;
  border-radius: 30px;
  font-size:21px;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #38ef7d,
    #11998e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #38ef7d,
    #11998e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color:#ffffff;
  cursor: pointer;
`;

export const CreateButton = styled(DefaultButton)`
  width: 180px;
  height: 50px;
  margin-left: 20px;
  border-radius: 30px;
  font-size:21px;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  /* border:1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

import styled, { keyframes } from 'styled-components';

const searchBar = keyframes`  
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;

export const TextContainer = styled.div`
  width: 550px;
  height: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 30px;
  backdrop-filter: blur(50px);
  /* filter:blur(4px); */
  background: rgb(2, 0, 36);
  /* background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.05) 0%,
        #00f5c966 0%,
        rgba(255, 255, 255, 0.05) 70%
    ); */
  padding: 10px;
  text-align: center;
  object-fit: cover;
  cursor: pointer;
  animation: ${searchBar} 1s;
  transition: 1s;
  animation-duration: 1s;
  animation-delay: 0.5s;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border:1px solid red; */
`;

export const TextField = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  padding-left: 20px;
  /* border:1px solid red; */
  float: left;
  border-radius: 30px;
  
  &:focus{
    outline: none;
  }
`;

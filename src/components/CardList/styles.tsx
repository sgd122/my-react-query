import styled from 'styled-components';

export const CardListContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin-left: 45px;
  margin-right: 45px;
  align-items:center;
  justify-content: center;
  width: 80vw;
  margin-bottom: 100px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  justify-items: center;
`;

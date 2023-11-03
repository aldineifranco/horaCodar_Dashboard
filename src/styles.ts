import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 180px auto;
  grid-template-rows: auto;

  grid-template-areas: 
  "sidebar content";
`;
  

export const Content = styled.div`
  grid-area: content;
  margin: 0 20px;
`;
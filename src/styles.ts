import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 100vh;
  grid-template-areas: "sidebar content";
`;

export const Content = styled.div`
  grid-area: content;
`;
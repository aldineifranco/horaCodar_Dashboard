import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  padding: 2rem;
  grid-area: content;
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NPSChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) =>
      theme.colors["white"]};
    text-align: center;
  }

  > img {
    width: 100px;
  }
`;

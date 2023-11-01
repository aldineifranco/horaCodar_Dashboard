import styled from "styled-components";

export const Container = styled.div`
  margin: 20vh auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ theme }) =>
    theme.colors.background_300};
  padding: 2rem;
  border-radius: 1rem;
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

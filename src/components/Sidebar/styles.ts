import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) =>
    theme.colors["gray_500"]};
  height: 100vh;
  width: 180px;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    padding: 1rem;

    border: 1px solid
      ${({ theme }) =>
        theme.colors["background_100"]};
    margin: 0 1rem;
    border-radius: 0.5rem;
    transition: border-color 0.5s;

    cursor: pointer;
  }

  div:hover {
    border-color: ${({ theme }) =>
      theme.colors["white"]};
    filter: brightness(0.8);
  }

  div h2 {
    font-size: 1rem;
  }
`;
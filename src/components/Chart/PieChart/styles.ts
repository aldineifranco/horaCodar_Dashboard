import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;  


  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) =>
      theme.colors["white"]};
    text-align: center;
  }
`;

export const Chart = styled.div`
  display: block;
  width: 197px;
  border-radius: 50%;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1rem solid
      ${({ theme }) => theme.colors["white"]};
  }
`;

export const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    & div {
      display: flex;
      align-items: center;
      gap: 0.2rem;

      span {
        display: block;
        width: 16px;
        height: 16px;
        background-color: ${({ theme }) =>
          theme.colors["white"]};
        border-radius: 50%;
      }

      p {
        font-size: 0.875rem;
        font-weight: 400;
        color: ${({ theme }) =>
          theme.colors["white"]};
      }
    }
  }
`;

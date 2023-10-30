import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header"
    "week chart"
    "week chart";

  & h2 {
    grid-area: header;
  }

`;


export const Week = styled.div`
  grid-area: week;
  display: grid;
  gap: 2rem;

  > .dia_semana {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > p {
      font-size: 1.5rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`;

export const Chart = styled.div`
  grid-area: chart;
`;

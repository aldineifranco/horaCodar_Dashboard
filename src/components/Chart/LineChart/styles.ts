import styled from "styled-components";
import { LineChartProps } from "../../../interfaces/LineChartProps";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header"
    "week chart"
    "week chart";
  flex: 1;

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
      font-size: 1.25rem;
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
  display: flex;
  gap: calc(3vw + 1rem);
  align-items: flex-end;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    // montar gráfico em linha com css para dias da semana, de segunda a domingo

    > .linha {
      width: 1.5rem;
      background: linear-gradient(
        180deg,
        #90f7ec 0%,
        #32ccbc 100%
      );
      border-radius: 0.5rem;
      height: 1rem;
      z-index: 1;
    }

    & p {
      font-size: 0.75rem;
      color: ${({ theme }) =>
        theme.colors["white"]};
      align-items: flex-end;
      text-align: center;
    }
  }
`;

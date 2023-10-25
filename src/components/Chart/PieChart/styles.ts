import styled from "styled-components";
import { PieChartProps } from "../../../interfaces/PieChartProps";


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

export const Chart = styled.div<PieChartProps>`
  position: relative;

  & svg {
    width: 12.3rem;
    height: 12.3rem;
    transform: rotate(-90deg);

    > circle {
      fill: none;
      stroke-width: 2rem;
      stroke-dasharray: 618;
      stroke-dashoffset: 618;
    }
    //calculo do stroke-dashoffset e stroke-dasharray para o svg é: PI(3,14) * width (197) = 618,58

    > circle:nth-child(1) {
      stroke-dashoffset: calc(
        618 - (618 * ${({ valorEsperado }) => valorEsperado }) / 100
      );;
    }

    > circle:nth-child(2) {
      stroke-dashoffset: calc(
        618 - (618 * ${({ valorAlcancado }) => valorAlcancado }) / 100
      );
    }
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

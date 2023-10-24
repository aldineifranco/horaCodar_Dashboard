import { Chart, Container, Legend } from './styles'

interface PieChartProps {
  children?: React.ReactNode;
  ValorAlcancado?: number;
  ValorEsperado?: number;
}


export function PieChart({ ValorAlcancado, ValorEsperado }: PieChartProps) {
  return (
    <Container>

      <h2>Vendas Fechadas</h2>

      <Chart>
        <div>
          <svg viewBox='0 0 232 232'>
            <circle
              cx="50%"
              cy="50%"
              r="98.5"
              stroke="#D9D9D9"
              opacity="0.1"
            />

            <circle
              cx="50%"
              cy="50%"
              r="98.5"
              stroke='url(#paint0)'
            />

            <defs>
              <linearGradient
                id="paint0"
                x1="1.97421e-07"
                y1="82" x2="154"
                y2="178"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE9FFC" />
                <stop offset="1" stop-color="#7367F0" />
              </linearGradient>
            </defs>
          </svg>
          
        </div>

        <div>
          <h2>{ValorAlcancado}</h2>
        </div>
       
      </Chart>

      <Legend>
        <div>
          <div>
            <span></span>
            <p>Esperado</p>
          </div>

          <p>100</p>
        </div>

        <div>
          <div>
            <span></span>
            <p>Alcançado</p>
          </div>

          <p>70</p>
        </div>
      </Legend>


    </Container>
  )
}

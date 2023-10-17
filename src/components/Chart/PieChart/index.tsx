import { Chart, Container, Legend } from './styles'
import Piechart from '../../../assets/piechart.svg'


export function PieChart() {
  return (
    <Container>

      <h2>Vendas Fechadas</h2>

      <Chart>
        <div>
          <span>70%</span>
          <p>alcançado</p>
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

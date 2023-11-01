import { Container, Week, Chart } from './styles'
import maisVenda from '../../../assets/icone-mais-venda.svg'
import menosVenda from '../../../assets/icone-menos-venda.svg'
import { LineChartProps } from '../../../interfaces/LineChartProps'

export function LineChart() {
  return (
    <Container>
      <h2>Vendas por dia da semana</h2>

      <Week>
        <div className='dia_semana'>
          <div>
            <img src={maisVenda} />

            <p>Dia com mais vendas</p>
          </div>
          <p>quarta-feira</p>
        </div>

        <div className='dia_semana'>
          <div>
            <img src={menosVenda} />

            <p>Dia com menos vendas</p>
          </div>
          <p>domingo</p>
        </div>



      </Week>

      <Chart>
        <div>
          <div className='linha'></div>
          <p>segunda</p>
        </div>

        <div>
          <div className='linha'></div>
          <p>terça</p>
        </div>
        <div>
          <div className='linha'></div>
          <p>quarta</p>
        </div>
        <div>
          <div className='linha'></div>
          <p>quinta</p>
        </div>
        <div>
          <div className='linha'></div>
          <p>sexta</p>
        </div>
        <div>
          <div className='linha'></div>
          <p>sábado</p>
        </div>
        <div>
          <div className='linha'></div>
          <p>domingo</p>
        </div>

      </Chart>


    </Container>
  )
}

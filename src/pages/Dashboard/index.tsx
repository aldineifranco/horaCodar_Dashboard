import { Container, Content, NPSChart } from './styles';
import { Card } from '../../components/Card';
import { PieChart } from '../../components/Chart/PieChart';
import { LineChart } from '../../components/Chart/LineChart';
import heapy from '../../assets/heapy.svg';
import { LineChartProps } from '../../interfaces/LineChartProps';

const salesWeek: LineChartProps[] = [
  {
    id: 1,
    day: 'Domingo',
    sales: 25
  },
  {
    id: 2,
    day: 'Segunda',
    sales: 40
  },
  {
    id: 3,
    day: 'Terça',
    sales: 60
  },
  {
    id: 4,
    day: 'Quarta',
    sales: 20
  },
  {
    id: 5,
    day: 'Quinta',
    sales: 50
  },
  {
    id: 6,
    day: 'Sexta',
    sales: 10
  },
  {
    id: 7,
    day: 'Sábado',
    sales: 12
  },

]


export function Dashboard() {
  return (
    <Container>
      <Content>
        <Card>
          <NPSChart>
            <h2>NPS Geral</h2>
            <img src={heapy} />
            <p>NPS Score: 75</p>
          </NPSChart>
        </Card>

        <Card>
          <PieChart valorAlcancado={40} valorEsperado={100} />
        </Card>

        <Card>
          <PieChart valorAlcancado={65} valorEsperado={100} />
        </Card>
      </Content>

      <Card>
        <LineChart />       
      </Card>
    </Container>
  )
}

import { Container, Content, NPSChart } from './styles';
import { Card } from '../../components/Card';
import { PieChart } from '../../components/Chart/PieChart';
import { LineChart } from '../../components/Chart/LineChart';
import heapy from '../../assets/heapy.svg';

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

import { Container, Content } from './styles';
import { Card } from '../../components/Card';
import { PieChart } from '../../components/Chart/PieChart';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <Card>
          Status
        </Card>

        <Card>
          <PieChart valorAlcancado={20} valorEsperado={100} />
        </Card>

        <Card><PieChart valorAlcancado={40} valorEsperado={100} /></Card>
      </Content>
      <Card>index</Card>
    </Container>
  )
}

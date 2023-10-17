import { Container, Content } from './styles';
import { Card } from '../../components/Card';
import { LineChart } from '../../components/Chart/LineChart';
import { PieChart } from '../../components/Chart/PieChart';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <Card>
          Status
        </Card>

        <Card>
          <PieChart />
        </Card>

        <Card>index</Card>
      </Content>
      <Card>index</Card>
    </Container>
  )
}

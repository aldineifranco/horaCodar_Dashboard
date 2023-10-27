import { Container, Content, NPSChart } from './styles';
import { Card } from '../../components/Card';
import { PieChart } from '../../components/Chart/PieChart';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <Card>
          <NPSChart>
            <h2>NPS Geral</h2> 
          </NPSChart>
         
        </Card>

        <Card>
          <PieChart valorAlcancado={40} valorEsperado={100} />
        </Card>

        <Card><PieChart valorAlcancado={65} valorEsperado={100} /></Card>
      </Content>
      <Card>index</Card>
    </Container>
  )
}

import { Sidebar } from "./components/Sidebar"
import { SidebarProps } from "./interfaces/SidebarProps"
import { Container, Content } from "./styles"

export function App({ children }: SidebarProps) {
  return (

    <Container>
  
      <Sidebar />

      <Content>
        {children}
      </Content>

    </Container>


  )
}


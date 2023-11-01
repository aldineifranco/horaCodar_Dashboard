import { Sidebar } from "./components/Sidebar"
import { SidebarProps } from "./interfaces/SidebarProps"
import { Dashboard } from "./pages/Dashboard"
import { Container, Content } from "./styles"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App( {children}: SidebarProps ) {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar />

        <Content>
          {children}
        </Content>

      </Container>
    </BrowserRouter>

  )
}

export default App

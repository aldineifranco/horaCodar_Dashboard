import { Sidebar } from "./components/Sidebar"
import { Dashboard } from "./pages/Dashboard"
import { Container } from "./styles"

function App() {
  return (
    <Container>
      <Sidebar />
      <Dashboard />
    </Container>
  )
}

export default App

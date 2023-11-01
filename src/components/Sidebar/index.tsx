import { Container } from "./styles";
import { CiAlignBottom, CiCircleList, CiViewTable } from "react-icons/ci";

interface SidebarProps {
  name: string;
  icon?: any;
}

export const Sidebar = () => {

  const SidebarItems = [
    {
      name: 'Dashboard',
      icon: <CiAlignBottom />
    },
    {
      name: 'Info',
      icon: <CiCircleList />
    },
    {
      name: 'Table',
      icon: <CiViewTable />
    },
  ]

  return (
    <Container>
      {
        SidebarItems.map((item) => {
          return (
            <div>
              {item.icon}
              <h2><a>{item.name}</a></h2>
            </div>
          )
        })
      }
    </Container>
  )
}
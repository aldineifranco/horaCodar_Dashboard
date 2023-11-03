import { Container, Menu } from "./styles";
import { CiAlignBottom, CiCircleList, CiViewTable } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { SidebarProps } from "../../interfaces/SidebarProps";

export const Sidebar = () => {

  const SidebarItems = [
    {
      id: crypto.randomUUID(),
      name: 'Dashboard',
      icon: <CiAlignBottom />,
      path: '/'
    },
    {
      id: crypto.randomUUID(),
      name: 'Info',
      icon: <CiCircleList />,
      path: '/info'
    },
    {
      id: crypto.randomUUID(),
      name: 'Table',
      icon: <CiViewTable />,
      path: '/table'
    },
  ]

  return (
    <Container>
      {
        SidebarItems.map((item) => {
          return (
            <Menu to={item.path} key={item.id}>
              <span>{item.icon}</span>
              <h2><a>{item.name}</a></h2>
            </Menu>
          )
        })
      }
    </Container>
  )
}
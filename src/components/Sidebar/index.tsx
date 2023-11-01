import { Container } from "./styles";
import { CiAlignBottom, CiCircleList, CiViewTable } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {

  const SidebarItems = [
    {
      name: 'Dashboard',
      icon: <CiAlignBottom />,
      path: '/'
    },
    {
      name: 'Info',
      icon: <CiCircleList />,
      path: '/info'
    },
    {
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
            <NavLink to={item.path}>
              {item.icon}
              <h2><a>{item.name}</a></h2>
            </NavLink>
          )
        })
      }
    </Container>
  )
}
import ScrollMenu from "../../components/scroll-menu"
import {Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
      <ScrollMenu />
      <Outlet />
    </div>
  )
}

export default Main
import Header from "@components/header"
import ScrollMenu from "../../components/scroll-menu"
import {Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
      <Header />
      <ScrollMenu />
      <Outlet />
    </div>
  )
}

export default Main
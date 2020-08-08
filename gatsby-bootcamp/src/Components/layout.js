import Footer from "../Components/footer"
import Header from "../Components/header"
import React from "react"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header></Header>
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default layout

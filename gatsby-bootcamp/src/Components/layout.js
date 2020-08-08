import Footer from "../Components/footer"
import Header from "../Components/header"
import React from "react"
import "../styles/index.css"

const layout = props => {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default layout

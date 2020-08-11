import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/layout"

export default function About() {
  return (
    <div>
      <Layout>
        <h1>About me</h1>
        <p>
          Graduated from UTS with bachelor of science in IT, currently studying
          master of data science in USYD. Working as web developer in i-motor.
        </p>
        <Link to="/contact">Contact Me</Link>
      </Layout>
    </div>
  )
}

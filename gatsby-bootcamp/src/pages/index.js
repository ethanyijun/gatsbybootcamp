import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/layout"
import Head from "../Components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I am Ethan, a full stack web developer living in Sydney.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import Layout from "../Components/layout"
import Head from "../Components/head"

export default function Contact() {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>My contact details:</h1>
        <p>Phone number: 0403011xxx</p>
        <p>
          <a
            href="https://www.linkedin.com/in/yijun-gai/"
            target="_blank"
            rel="noreferrer"
          >
            My Linkedin
          </a>
        </p>
      </Layout>
    </div>
  )
}

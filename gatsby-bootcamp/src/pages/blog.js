import React from "react"
import Layout from "../Components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => (
            <li>
              <Link to={"/blog/" + edge.node.fields.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  )
}

import React from "react"
import { graphql } from "gatsby"
import Layout from "@layouts/Layout"
import Img from "gatsby-image"
export default ({ data }) => {
  let post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredimage
      }
    }
  }
`
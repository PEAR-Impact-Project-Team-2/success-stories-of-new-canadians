import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '@layouts/Layout'
import '@styles/pages/Index.scss'
//import Features from '../components/Features'
//import SelectionRoll from '../components/SelectionRoll' <Img fluid={image.childImageSharp.fluid}></Img>

export const BlogPageTemplate = ({
  title
  
}) => (
  <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/World_map_green.png" alt="a world map" width="100vw"/>
            <h1>{title}</h1>
            </div> 


)

BlogPageTemplate.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const SelectionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <Layout>
          <BlogPageTemplate
              title={frontmatter.title}
          />
      </Layout>
  )
}

BlogPageTemplate.propTypes = {
  data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.object,
      }),
  }),
}


export const selectionQuery = graphql`
query BlogPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "story-page"}}) {
      frontmatter {
        title
        country
        date
        description
        featuredpost
        featuredimage
        tags
      }
    }
  }
`

export default SelectionPage
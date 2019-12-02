import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Button } from '../components/Button'
import Img from "gatsby-image"

import Layout from '@layouts/Layout'
import '@styles/pages/Index.scss'
//import Features from '../components/Features'
//import BlogRoll from '../components/BlogRoll' <Img fluid={image.childImageSharp.fluid}></Img>

export const IndexPageTemplate = ({
    image,
    title,
    heading,
    subheading,
    aboutus,
    
}) => (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/World_map_green.png" alt="a world map" width="100vw"/>
            <h1>{title}</h1>
            <h2>{heading}</h2>
            <h3>{subheading}</h3>
            <h4>{aboutus.title}</h4>
            <p>{aboutus.description}</p>
        </div>
    )

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    aboutus: PropTypes.object,
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <div>
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                aboutus={frontmatter.aboutus}
            />
        </Layout>
        <Button className='index__button' to='/selectionTest'>
            Discover Stories
        </Button>
        </div>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export const pageQuery = graphql`
query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image
        heading
        subheading
        aboutus {
          title
          description
        }
      }
    }
  }
`

export default IndexPage
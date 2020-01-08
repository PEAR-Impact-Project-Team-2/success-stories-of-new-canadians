import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { toTitleCase } from '@components/SquareFlagIcon'
import { Page } from '@layouts/Page';
import FilterDrawer from '@components/FilterDrawer'
import Navbar from '@components/Navbar';
import '@styles/pages/SelectionTest.scss'

export const SelectionPageTemplate = ({
  title

}) => (
    <div>
      <h1>{title}</h1>
    </div>
  )

SelectionPageTemplate.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

function GenerateTags(edges) {
  let t = [];
  edges.forEach(({ node }) => {
    node.frontmatter.tags.forEach(storyTag => {
      if (!t.includes(storyTag.toLowerCase()))
        t.push(storyTag.toLowerCase())
    })
  })
  return t;
}

function GenerateCountries(edges) {
  let t = [];
  edges.forEach(({ node }) => {
    if (!t.includes(node.frontmatter.country.toLowerCase()))
      t.push(node.frontmatter.country.toLowerCase())
  })
  return t.map(toTitleCase)
}


const SelectionPage = ({ data, location }) => {

  const { allMarkdownRemark } = data
  const { state = {} } = location
  // const { searchTag } = (state == null ? null : state)

  return (
    <Page classes={{ width: '100%', marginTop: '100px' }}>
      <title>Page to search and filter blog stories on the site.</title>
      <meta name="selection page"
        content="Search blog stories from new canadians"></meta>
      <Navbar page='selection' />
      <div className={'selectionTest__headerBox'}>
        <h1 className='selectionTest__titleSpace'>s</h1>
        <h1 className='selectionTest__title'>Search Stories</h1>
      </div>
      {console.log(location.state !== null)}
      <FilterDrawer
        edges={allMarkdownRemark.edges}
        tags={GenerateTags(allMarkdownRemark.edges).sort()}
        countries={GenerateCountries(allMarkdownRemark.edges).sort()}
        initialTag=
        {
          (location.state !== null) ?
            (!location.state.hasOwnProperty('searchTag') || location.state.searchTag == null) ? null : location.state.searchTag.event
            : null
        }
        initialSearchText=
        {
          (location.state !== null) ?
            (!location.state.hasOwnProperty('searchText') || location.state.searchText == null) ? "" : location.state.searchText
            : null
        }
      >
      </FilterDrawer>
    </Page>
  )
}

SelectionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const blogQuery = graphql`
query SelectionPageTemplate {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        filter: { frontmatter: { templateKey: { eq: "story-page" } } } 
    ) {
        edges {
            node {
                frontmatter {
                    title
                    country
                    date(formatString: "MMMM DD, YYYY")
                    description
                    image
                    tags
                    author
                }
                fields {
                  slug
                }
            }
        }
    }
  }
`
export default SelectionPage
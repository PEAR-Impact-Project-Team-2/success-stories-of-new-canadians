import React from 'react';
import { Page } from '@layouts';
import PropTypes from 'prop-types'
import { Card, CardHeader, CardMedia, Button as MaterialButton, CardActions } from '@material-ui/core';
import { StaticQuery, graphql, navigate } from "gatsby"

class StoryRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='index__cards'>
        {
          data.allMarkdownRemark.edges.map(({ node }, i) => (
            <Card className='index__card' key={i}>
              <CardMedia style={{ height: '260px' }} image={node.frontmatter.image.publicURL} />
              <CardHeader
                title={node.frontmatter.title}
                subheader={node.frontmatter.description}
              />
              <CardActions>
                <MaterialButton color="primary" onClick={() => {
                  navigate(node.fields.slug);
                }}>
                  Read More
                </MaterialButton>
              </CardActions>
            </Card>
          ))
        }
      </div>
    )
  }
}

StoryRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___order, order: ASC}, filter: {frontmatter: {templateKey: {eq: "story-page"}}}) {
        edges {
          node {
            frontmatter {
              title
              image {
                publicURL
              }
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `}
    render={data => <StoryRoll data={data} />}
  />
)
/**
 * An example of using Material UI
 */

import React from 'react';
import { Card, CardHeader, CardMedia, Button as MaterialButton, CardActions } from '@material-ui/core';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { withSeo } from '@utils';
import { Page } from '@layouts';
import { Button } from '@components';
import '@styles/pages/Index.scss';

/** Get all markdown pages in ascending order */
const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
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
`;

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(query);
  console.log(allMarkdownRemark);

  return (
    <Page className='index'>
      <h1 className='index__title'>CSEC Pear Impact Project - Starter Code</h1>
      <p className='index__text'>Not an actual fruit...</p>
      <div className='index__cards'>
        {
          allMarkdownRemark.edges.map(({ node }, i) => (
            <Card className='index__card' key={ i }>
              <CardMedia style={{ height: '260px' }}/>
              <CardHeader
                title={ node.frontmatter.title }
                subheader= { node.frontmatter.description }
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
      <Button className='index__button' to='/welcome'>
        Let's Get Started
      </Button>
      <Button className='selection__button' to='/selection'>
        Select A Story
      </Button> 
    </Page>
  );
};

export default withSeo(IndexPage, {
  title: 'Home',
});

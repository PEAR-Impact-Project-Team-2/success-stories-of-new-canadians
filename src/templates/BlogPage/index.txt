import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@layouts';
import { Header } from './Header';
import { Footer } from './Footer';
import { Seo } from '@components';
import '@styles/templates/BlogPage.scss';

const BlogPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { order, ...headerProps } = frontmatter;

  return (
    <Page className='blog'>
      <Seo title={headerProps.title} />
      <Header {...headerProps} />
      <div
        className='blog__content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer order={order} edges={data.allMarkdownRemark.edges} />
    </Page>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        author
        order
        date(formatString: "MMMM DD, YYYY")
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;

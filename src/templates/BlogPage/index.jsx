import React from 'react';
import { graphql } from 'gatsby';
//import { Page } from '@layouts';
//import { Header } from './Header';
import { BlogHeader } from '../../components/BlogHeader';
import { ShareCard } from '../../components/ShareCard';
import { SuggestStories } from '../../components/SuggestStories';
import { DiscussionEmbed } from "disqus-react"
//import { Footer } from './Footer';
import { Seo } from '@components';
import '@styles/templates/BlogPage.scss';

const BlogPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { order, ...headerProps } = frontmatter;
  const disqusConfig = {
    shortname: 'immigrant-success-canada',
    config: { identifier: order },
  }

  return (
    <div>
     <BlogHeader {...headerProps} />

     <div className='purpleStrip'></div>
    
      {/*
      <Page className='blog'>
        <Seo title={headerProps.title} />
        <Header {...headerProps} />
        <div
          className='blog__content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Footer order={order} edges={data.allMarkdownRemark.edges} />
      </Page>
      */}

      <div className='blogContainer'>
        <Seo title={headerProps.title} />
        
        <div className='content__socialMedia'>

          <ShareCard />

        </div>

        <div
          className='content__paragraph'
          dangerouslySetInnerHTML={{ __html: html }}
        />
        
        {/* <Footer order={order} edges={data.allMarkdownRemark.edges} /> */}
        
        <div className='content__suggestedBlog'>
          <SuggestStories order={order} edges={data.allMarkdownRemark.edges} />
        </div>

      </div>
      
      <div className='comment'>
        <div className='comment__commentSection'>
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </div>

    </div>

  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          publicURL
        }
        description
        author
        country
        order
        date(formatString: "MMMM DD, YYYY")
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___order, order: ASC}, filter: {frontmatter: {templateKey: {eq: "story-page"}}}) {
      edges {
        node {
          frontmatter {
            title
            image {
              publicURL
            }
            description
            author
            order
            date(formatString: "MMMM DD, YYYY")
            country
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

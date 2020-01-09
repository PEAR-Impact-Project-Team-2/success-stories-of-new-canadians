import React from 'react';
import { graphql } from 'gatsby';
import { BlogHeader } from '@components/BlogHeader';
import { ShareCard } from '@components/ShareCard';
import { SuggestStories } from '@components/SuggestStories';
import { Seo } from '@components';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
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
      <div className='navSpace'></div>

      <Navbar />

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
          
          <div className='content__suggestedBlog'>
            
          </div>

        </div>

        <div className='suggestedBlog'>
          <SuggestStories order={order} edges={data.allMarkdownRemark.edges} />    
        </div>
        
        {/*
          LEGACY CODE FOR DISCUS

        <div className='comment'>
          <div className='comment__commentSection'>
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </div>
        */}

        <Footer />

    </div>

  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
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
            image
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

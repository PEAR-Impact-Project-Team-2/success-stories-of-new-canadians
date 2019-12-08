import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { withSeo } from '@utils';
import { Page } from '@layouts';
import { Button } from '@components';
import StoryRoll from '@components/StoryRoll'
// NOTICE: Welcome does not exist
// import { Welcome } from '@components';
import '@styles/pages/Index.scss';

/** Get all markdown pages in ascending order */
const query = graphql`
{
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      aboutus {
        description
        title
      }
      image
      subheading
      heading
      title
    }
  }
}
`;

const IndexPage = () => {
  const { markdownRemark } = useStaticQuery(query);

  return (
    <Page className='index'>
      <h1 className='index__title'>{markdownRemark.frontmatter.title}</h1>
      <p className='index__text'>{markdownRemark.frontmatter.heading}</p>
      <img src={markdownRemark.frontmatter.image} alt="Logo" height='360px'/>;
      <StoryRoll/>
      <Button className='selection__button' to='/selection'>
        Select A Story
      </Button> 
    </Page>
  );
};

export default withSeo(IndexPage, {
  title: 'Home',
});
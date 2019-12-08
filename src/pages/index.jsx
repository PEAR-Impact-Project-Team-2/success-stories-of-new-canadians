import React from 'react';
import { withSeo } from '@utils';
import { Page } from '@layouts';
import { Button } from '@components';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import StoryRoll from '@components/StoryRoll'
// NOTICE: Welcome does not exist
// import { Welcome } from '@components';
import '@styles/pages/Index.scss';

const IndexPage = () => {
  return (
    <Page id='home' className='index'>
      <Navbar/>
      <Header />
      <StoryRoll/>
      <Button id='contact' className='selection__button' to='/selectionTest'>
        Select A Story
      </Button> 
    </Page>
  );
};

export default withSeo(IndexPage, {
  title: 'Home',
});
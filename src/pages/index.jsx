import React from 'react';
import { withSeo } from '@utils';
import { Page } from '@layouts';
import { Button, Navbar } from '@components';
import Header from '@components/Header';
import About from '@components/About';
import '@styles/pages/Index.scss';

const IndexPage = () => {
  return (
    <Page id='home' className='index'>
      <Navbar />
      <Header />
      <About />
      <Button id='contact' className='index__button' to='/selectionTest'>
        Select A Story
      </Button> 
    </Page>
  );
};

export default withSeo(IndexPage, {
  title: 'Home',
});
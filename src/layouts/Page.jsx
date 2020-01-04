import React from 'react';
import Footer from '@components/Footer';
import favicon from '@assets/logo-icon.png';
import '@styles/layouts/Page.scss';
import { Container } from '@material-ui/core';

export const Page = ({ children, className, ...props }) => (
  // <main className={`page${className ? ` ${className}` : ''}`} {...props}>
  <div>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Container className='page__content'>{children}</Container>
    <Footer/>
  </div>
  // </main>
);

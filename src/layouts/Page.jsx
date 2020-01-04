import React from 'react';
import Footer from '@components/Footer';
import '@styles/layouts/Page.scss';
import { Container } from '@material-ui/core';

export const Page = ({ children, className, ...props }) => (
  // <main className={`page${className ? ` ${className}` : ''}`} {...props}>
  <div>
    <Container className='page__content'>{children}</Container>
    <Footer/>
  </div>
  // </main>
);

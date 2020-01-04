import React from 'react';
import Footer from '@components/Footer';
import '@styles/layouts/Page.scss';
import { Box } from '@material-ui/core';

export const Page = ({ children, className, ...props }) => (
  // <main className={`page${className ? ` ${className}` : ''}`} {...props}>
  <div>
    <Box className='page__content'>{children}</Box>
    <Footer/>
  </div>
  // </main>
);


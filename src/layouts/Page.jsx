import React from 'react';
import Card from '@material-ui/core/Card';
import '@styles/layouts/Page.scss';

export const Page = ({ children, className, ...props }) => (
  <main className={`page${className ? ` ${className}` : ''}`} {...props}>
    <div className='page__content'>{children}</div>
  </main>
);

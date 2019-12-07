import React from 'react';
import { Button } from '@components';

export const Footer = ({ order, edges }) => (
  <footer className='blog__footer'>
    {Boolean(order) ? (
      <Button
        to={edges[order - 1].node.fields.slug}
        className='blog__button'
        disabled={!order}
      >
        Prev Page - {edges[order - 1].node.frontmatter.title}
      </Button>
    ) : (
      <Button className='blog__button blog__button--back' to='/'>
        Back to Home
      </Button>
    )}
    {order !== edges.length - 1 ? (
      <Button to={edges[order + 1].node.fields.slug} className='blog__button'>
        Next Page - {edges[order + 1].node.frontmatter.title}
      </Button>
    ) : (
      <Button className='blog__button blog__button--back' to='/'>
        Back to Home
      </Button>
    )}
  </footer>
);

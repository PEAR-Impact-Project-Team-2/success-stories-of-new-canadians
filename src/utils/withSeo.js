import React from 'react';
import { Seo } from '@components';

export const withSeo = (Component, config = {}) => props => (
  <>
    <Seo {...config} />
    <Component {...props} />
  </>
);

import React from 'react';
import { Seo } from './../components/Seo';

export const withSeo = (Component, config = {}) => props => (
  <>
    <Seo {...config} />
    <Component {...props} />
  </>
);

export default withSeo
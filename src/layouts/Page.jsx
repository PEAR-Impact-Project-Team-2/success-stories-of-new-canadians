import React from 'react';
import Card from '@material-ui/core/Card';
import '@styles/layouts/Page.scss';

export const Page = ({ children, className, ...props }) => (
  <main className={`page${className ? ` ${className}` : ''}`} {...props}>
<<<<<<< HEAD
    <div className='page__content'>{children}</div>
  </main>
);
=======
    <Card className='page__content'>{children}</Card>
  </main>
);
>>>>>>> netlifycms-test

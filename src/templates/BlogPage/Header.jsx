import React from 'react';

export const Header = ({ title, description, author, date }) => (
  <header className='blog__header'>
    <h1 className='blog__title'>{title}</h1>
    <p className='blog__desc'>{description}</p>
    <ul className='blog__tags'>
      <li className='blog__tag'>
        <strong>By: </strong>
        {author}
      </li>
      <li className='blog__tag'>
        <strong>Last Modified: </strong>
        {date}
      </li>
    </ul>
  </header>
);

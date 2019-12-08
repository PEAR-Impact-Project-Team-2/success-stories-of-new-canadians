import React from 'react';
import { Button } from '@material-ui/core';
import '@styles/components/BlogHeader.scss';

export const BlogHeader = ({ title, description, author, date, image, country }) => ( 
    <div className={`BlogHeader`}>
        <div className={`BlogHeader__Title`}>
            <div className={`BlogHeader__TitleText`}>
                <header className='blog__header'>
                    <h1 className='blogHeader__titleHeader'>{title}</h1>
                    <p className='blog__desc'>{description}</p>
                    <ul className='blog__tags'>
                        <li className='BlogHeader__tag'>
                            <strong>Name: </strong>
                            {author}
                        </li>
                        <li className='BlogHeader__tag'>
                            <strong>Date: </strong>
                            {date}
                        </li>
                        <li className='BlogHeader__tag'>
                            <strong>Country of origin: </strong>
                            {country}
                        </li>
                    </ul>
                </header>
                <div>
                    <ul className='blog__tags'>
                        <li className='BlogHeader__tag'>
                            <Button variant="outlined" color="secondary">About Author</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={`BlogHeader__Image`} style={{ backgroundImage: `url(${image})` }}>
            <div className={`BlogHeader__ImageGradient`}></div>
        </div>
    </div>

);
import React from 'react';
import { Button } from '@material-ui/core';
import '@styles/components/BlogHeader.scss';

export const BlogHeader = ({ title, description, author, date, image }) => ( 
    <div className={`BlogHeader`}>
        <div className={`BlogHeader__Title`}>
            <div className={`BlogHeader__TitleText`}>
                <header className='blog__header'>
                    <h1 className='blogHeader__titleHeader'>{title}</h1>
                    <p className='blog__desc'>{description}</p>
                    <ul className='blog__tags'>
                    <li className='BlogHeader__tag'>
                        <strong>By: </strong>
                        {author}
                    </li>
                    <li className='BlogHeader__tag'>
                        <strong>Date: </strong>
                        {date}
                    </li>
                    </ul>
                </header>
                <div>
                    <ul className='blog__tags'>
                        <li className='BlogHeader__tag'>
                            <Button variant="outlined" color="primary">Read Story</Button>
                        </li>
                        <li className='BlogHeader__tag'>
                            <Button variant="outlined" color="primary">Share</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={`BlogHeader__Image`} style={{ backgroundImage: `url(${image.publicURL})` }}>
            <div className={`BlogHeader__ImageGradient`}></div>
        </div>
    </div>

);
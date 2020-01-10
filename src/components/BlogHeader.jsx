import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { navigate } from 'gatsby'
import { Chip, Button } from '@material-ui/core';
import '@styles/components/BlogHeader.scss';

const CssChip = withStyles({
    root: {
        backgroundColor: 'red',
        color: 'white',
        '&:hover':
        {
        backgroundColor: 'white',
        color: 'red',
        },
        marginRight: '2px',
        marginTop: '5px',
    }
})(Chip)

const onTagSelect = (event) => {
    navigate("/selectionTest", {
        state: { searchTag: { event } },
    })
}

export const BlogHeader = ({ title, description, author, date, image, country, tags }) => ( 
    <div className={`BlogHeader`}>
        <div className={`BlogHeader__Title`}>
            <div className={`BlogHeader__TitleText`}>
                <header className='blog__header'>
                    <h1 className='blogHeader__titleHeader'>{title}</h1>
                    <p className='blog__desc'>{description}</p>
                    <ul className='blog__tags'>
                        <li className='BlogHeader__tag'>
                            <strong>by </strong>
                            {author}
                        </li>
                        <li className='BlogHeader__tag'>
                            {country}
                        </li>
                        <li className='BlogHeader__tag'>
                            {date}
                        </li>
                    </ul>
                </header>
            </div>
        </div>

        <div className={`BlogHeader__Image`} style={{ backgroundImage: `url(${image})` }}>
            <div className={`BlogHeader__ImageGradient`}></div>
        </div>
    </div>

);
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
                        <span>
                        <p className='BlogHeader__tag'>
                            {"by " + author}
                        </p>
                        </span>
                        <span>
                        <p className='BlogHeader__tag'>
                            {country}
                        </p>
                        </span>
                        <span>
                        <p className='BlogHeader__tag'>
                            {date}
                        </p>
                        </span>
                    { tags.map(tag => {
                            return (
                                <CssChip
                                color="primary" 
                                style={{marginRight: '5px'}}
                                label={tag} 
                                onClick={() => onTagSelect(tag)} 
                                key={tag}/>
                            );
                        })
                    }
                    
                </header>
            </div>
        </div>

        <div className={`BlogHeader__Image`} style={{ backgroundImage: `url(${image})` }}>
            <div className={`BlogHeader__ImageGradient`}></div>
        </div>
    </div>

);
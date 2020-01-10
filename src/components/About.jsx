import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '@styles/components/About.scss';

export default class About extends Component {
    render() {
        const { data } = this.props

        return (
            <div className='aboutWrap'>
                <section>
                    
                </section>
            </div>
        );
    }
}

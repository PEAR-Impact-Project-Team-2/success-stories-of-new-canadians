import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Card } from '@material-ui/core';

import '@styles/components/Header.scss';

class Header extends Component {
   render() {
      const { data } = this.props

      return (
         <div className='headcont'>
            <Card>
            <header style={{ backgroundImage: `url(${data.markdownRemark.frontmatter.image})`, width: '100%', justifySelf: 'center' }} id="home">
               <div style={{paddingTop: '300px'}}>
                  <h1 style={{color: 'red'}}>{data.markdownRemark.frontmatter.title}</h1>
                  <h4 style={{color: 'white'}}>{data.markdownRemark.frontmatter.heading}</h4>
               </div>
            </header>
            </Card>
         </div>
      );
   }
}

export default () => (
   <StaticQuery
      query={graphql`
     {
      markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
        frontmatter {
          image
          heading
          title
        }
      }
    }
     `}
      render={data => <Header data={data} />}
   />
)
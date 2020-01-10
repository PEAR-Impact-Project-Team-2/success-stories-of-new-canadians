import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Card } from '@material-ui/core';

import '@styles/components/Header.scss';
import MapChart from '@components/MapChart';

class Header extends Component {
   render() {
      const { data } = this.props

      return (
         <div className='headcont'>
            <Card>
               <header style={{ backgroundImage: `url(${data.markdownRemark.frontmatter.image})`, width: '100%', justifySelf: 'center' }} id="home">
                  <div style={{ paddingTop: '300px' }}>
                     <h1 style={{ color: 'red' }}>Success Stories of New Canadians</h1>
                     <h4 style={{ color: 'white' }}>A place to read, share, and celebrate the successes of new Canadians through blog stories of real stories.</h4>
                  </div>
               </header>
               <MapChart />
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
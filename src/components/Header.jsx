import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Card } from '@material-ui/core';
import { Button } from "gatsby-theme-material-ui";
import '@styles/components/Header.scss';
import MapChart from './MapChart';

class Header extends Component {
   render() {
      const { data } = this.props

      return (
         <div className='headcont'>
            <Card>
               <header style={{ width: '100%', justifySelf: 'center' }} id="home">
                  <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', minWidth: '80%'}}>
                     <h1>{data.markdownRemark.frontmatter.title}</h1>
                     <h4>{data.markdownRemark.frontmatter.heading}</h4>
                     <Button size="large" style={{color: 'white', backgroundColor: 'red'}} href='/selectionTest'>
                        Discover the stories
                     </Button>
                  </div>

                  <MapChart />

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
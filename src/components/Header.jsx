import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '@styles/components/Header.scss';
import MapChart from '@components/MapChart'

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


class Header extends Component {
   render() {
      const { data } = this.props
      return (
         <div className='headcont'>
            <header style={{ backgroundImage: `url(${data.markdownRemark.frontmatter.image})`, width: '100%', justifySelf: 'center' }} id="home">
               <div className="banner-text">
                  <h1>{data.markdownRemark.frontmatter.title}</h1>
                  <h2>{data.markdownRemark.frontmatter.heading}</h2>
               </div>
               <MapChart />
            </header>
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
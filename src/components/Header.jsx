import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '@styles/components/Header.scss';

class Header extends Component {
   render() {
      const { data } = this.props

      return (
         <div className='headcont'>
            <header id="home">
               <div className="row banner">
                  <div className="banner-text">
                     <h1>{data.markdownRemark.frontmatter.title}</h1>
                     <h3>{data.markdownRemark.frontmatter.heading}</h3>
                     <hr />
                  </div>

                  <p className="scrolldown">
                     <a className="smoothscroll" href="#contact"><i class="fa fa-arrow-down"></i></a>
                  </p>
               </div>
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
          aboutus {
            description
            title
          }
          image
          subheading
          heading
          title
        }
      }
    }
     `}
      render={data => <Header data={data} />}
   />
)
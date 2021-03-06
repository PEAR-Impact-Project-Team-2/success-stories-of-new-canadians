import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '@styles/components/Header.scss';

class About extends Component {
    render() {
        const { data } = this.props

        return (
            <div className='headcont'>
                <header style={{ backgroundImage: `url(${data.markdownRemark.frontmatter.image})` }} id="home">
                    <div className="row banner">
                        <div className="banner-text">
                            <h1>{data.markdownRemark.frontmatter.title}</h1>
                            <h3>{data.markdownRemark.frontmatter.heading}</h3>
                            <hr />
                        </div>
                        <p className="scrolldown">
                            <a className="smoothscroll" href="#contact"><i className="fa fa-arrow-down"></i></a>
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
            description1
            title1
            image
            description2
            title2
          }
        }
      }
    }
     `}
        render={data => <About data={data} />}
    />
)
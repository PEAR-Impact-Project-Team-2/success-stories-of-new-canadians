import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import '@styles/components/Navbar.scss';
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { StaticQuery, graphql, navigate } from "gatsby"

export class Navbar extends Component {

  render() {

    const { data } = this.props

    const autocompleteoptions = data.allMarkdownRemark.edges.map(({ node }) => {
      return {
        title: "'" + node.frontmatter.title + "' from " + node.frontmatter.author,
        country: node.frontmatter.country,
        slug: node.fields.slug
      }
    });

    const widgetStyles = makeStyles(theme => ({
      searchBox: {
        maxHeight: '10px',
      },
    }));

    const CSSNavBarTextField = withStyles({
      root: {
        '& label.Mui-focused': {
          color: 'red',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'red',
        },
        '& .MuiFormLabel-root': {
          color: 'red',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'red',
          },
          '&:hover fieldset': {
            borderColor: 'red',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'red',
          },
        },
        '& .MuiAutocomplete-inputRoot': {
          '& .MuiAutocomplete-input': {
            minWidth: '250%'
          }
        }
      },
      '@global': {
        '.MuiFormControl-root': {
          display: 'contents',
        },
        '.MuiAutocomplete-tag': {
          backgroundColor: 'red',
          color: 'white',
        },
      },
    })(TextField);

    const onSelect = (event, values) => {
      navigate(values.slug)
    }

    return (
      <div class="parent">
        <nav class="nav-wrap">
          <a href="./" id="logo">
            <img src="/images/uploads/logo-icon-navbar.png" alt="logo" width="72px" />
          </a>
          <ul id="nav" className="nav">
            <li>
              <Autocomplete
                className={widgetStyles.searchBox}
                freeSolo
                disableClearable
                onChange={onSelect}
                style={{ width: 100 }} size='small'
                id="combo-box-demo"
                options={autocompleteoptions}
                renderOption={(option) => (
                  <React.Fragment>
                    <p className="selectionTest__checkboxtext">{option.title}</p>
                  </React.Fragment>
                )}
                renderInput={params => (
                  <CSSNavBarTextField
                    className={widgetStyles.searchBox}
                    {...params}
                    margin="dense"
                    variant="outlined"
                    placeholder="Search ... "
                    size='small'
                    fullWidth
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />
            </li>
            <li className="current"><a className="smoothscroll" href="./">Home</a></li>
            <li><a className="smoothscroll" href="/selectionTest">Stories</a></li>
            <li><a className="smoothscroll" href="https://azharlaher.com/about-azhar">About Me</a></li>
            <li><a className="smoothscroll" href="/contact">Contact Me</a></li>
            <li><a className="smoothscroll" href="/contact">Subscribe</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___order, order: ASC}, filter: {frontmatter: {templateKey: {eq: "story-page"}}}) {
      edges {
        node {
          frontmatter {
            title
            author
            country
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `}
    render={data => <Navbar data={data} />}
  />
)
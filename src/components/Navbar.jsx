import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import '@styles/components/Navbar.scss';
import PropTypes from 'prop-types'
import { TextField, Hidden } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { StaticQuery, graphql, navigate } from "gatsby"
import MobileNavbar from '@components/MobileNavbar'
import { navigation } from '@components/Directory'

// const navigation = [
//   {
//     "text": "Home",
//     "relativelink": "/",
//     "id": 'home'
//   },
//   {
//     "text": "Stories",
//     "relativelink": "/selectionTest",
//     "id": "selection"
//   },
//   {
//     "text": "About Me",
//     "relativelink": "/",
//     "id": "about"
//   },
//   {
//     "text": "Contact Me",
//     "relativelink": "/contact",
//     "id": "contact"
//   },
//   {
//     "text": "Subscribe",
//     "relativelink": "/contact",
//     "id": "subscribe"
//   }
// ]

export class Navbar extends Component {

  render(props) {

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
            minWidth: '130%'
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
      if (values.slug !== undefined)
        navigate(values.slug)
      else
        navigate("/selectionTest", {
          state: { searchTag: null, searchText: currentSearchText },
        });
    }

    var currentSearchText = "";

    function onSearchSubmit() {
      navigate("/selectionTest", {
        state: { searchTag: null, searchText: currentSearchText },
      })
    }

    const search = (e) => {
      currentSearchText = e.target.value;
    }

    return (

      <div className="parent">
        <Hidden smDown>
          <nav className="nav-wrap">
          <meta name="navbar" content="Desktop navigation bar."/>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a id="logo">
                <img src="/images/uploads/logo-icon-navbar.png" alt="logo" width="72px" />
              </a>
              <h1 style={{color: 'red', alignSelf: 'center', textAlign: 'center', marginRight: 20}}>
                Success Stories of New Canadians
              </h1>
            </div>
            <a>
            <ul id="nav" className="nav">

            {
                this.props.page.page === 'selection' ? null :
                  <Autocomplete
                    className={widgetStyles.searchBox}
                    freeSolo
                    disableClearable
                    margin='dense'
                    onChange={onSelect}
                    style={{ width: 250 }}
                    size='small'
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
                        onChange={search}
                                    onKeyPress={(ev) => {
                                        if (ev.key === 'Enter') {
                                            onSearchSubmit();
                                        }
                                    }}
                      />
                    )}
                  />
              }
              {console.log(data)}
              {navigation.map((entry) => (
                <li>
                  <a
                    className={this.props.page.page === entry.id ? "nav-wrap__current" : "nav-wrap__other"}
                    href={entry.relativelink}>
                    {entry.text}
                  </a>
                </li>
              ))}

              {/* Legacy Link to Azhar's Site 
              <li><a className={this.props.page.page === 'about' ? "nav-wrap__current" : "nav-wrap__other"} href="https://azharlaher.com/about-azhar">About Me</a></li> */}
            </ul>
            </a> 
          </nav>
        </Hidden>
        <Hidden mdUp>
          <MobileNavbar page={this.props.page.page} navigation={navigation} autocompleteoptions={autocompleteoptions} ></MobileNavbar>
        </Hidden>
      </div>
    );
  }
}

Navbar.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    page: PropTypes.string,
  }),
}

export default (props) => (
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
    render={data => <Navbar data={data} page={props} />}
  />
)

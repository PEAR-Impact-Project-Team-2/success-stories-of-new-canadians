import '@styles/components/SearchWidget.scss';

import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { TextField, Chip } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { StaticQuery, graphql, navigate } from "gatsby";

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

export class SearchWidget extends Component {
    render() {

        const { data } = this.props

        const autocompleteoptions = data.allMarkdownRemark.edges.map(({ node }) => {
            return {
                title: "'" + node.frontmatter.title + "' from " + node.frontmatter.author,
                country: node.frontmatter.country,
                slug: node.fields.slug
            }
        });

        function generateTags() {
            data.allMarkdownRemark.edges.forEach(({ node }) => {
                node.frontmatter.tags.forEach(tag => { if (!featuredtags.includes(tag)) featuredtags.push(tag) })
            });
        }

        var featuredtags = [];

        const onSelect = (event, values) => {
            navigate(values.slug)
        }

        const onTagSelect = (event) => {
            navigate("/selectionTest", {
                state: { searchTag: { event } },
            })
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
    

        return (
            <div className="widgetStyles__searchwidget">
                <h1 style={{marginBottom: '15px'}}>Directly search by title or person</h1>
                <Autocomplete
                    className="widgetStyles__searchBox"
                    freeSolo
                    disableClearable
                    margin='dense'
                    onChange={onSelect}
                    style={{ width: '80%' }}
                    size='small'
                    id="combo-box-demo"
                    options={autocompleteoptions}
                    renderOption={(option) => (
                      <React.Fragment>
                        <p className="widgetStyles__checkboxtext">{option.title}</p>
                      </React.Fragment>
                    )}
                    renderInput={params => (
                      <CSSNavBarTextField
                        className="widgetStyles__searchBox"
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
                <div>
                    {generateTags()}
                    <p className='widgetStyles__tagTitle'>or browse stories tagged with a specific topic: </p>
                    {
                        featuredtags.map(tag => {
                            return (
                                <CssChip 
                                label={tag} 
                                size="small"
                                onClick={() => onTagSelect(tag)} 
                                key={tag}>
                                  {tag}
                                  </CssChip>
                            )
                        }
                        )
                    }
                </div>
            </div>
        )
    }
}

SearchWidget.propTypes = {
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
        render={data => <SearchWidget data={data} />}
    />
)


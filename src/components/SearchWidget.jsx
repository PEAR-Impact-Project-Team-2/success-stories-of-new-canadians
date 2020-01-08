import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { TextField, Chip } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { StaticQuery, graphql, navigate } from "gatsby"

import '@styles/pages/SelectionTest.scss'

export class SearchWidget extends React.Component {
    render() {

        const useStyles = makeStyles(theme => ({
            searchBox: {
                marginLeft: '15px',
                marginRight: '15px',
                marginTop: '30px',
                marginBottom:'30px',
            }, 
            tagBox: {
                display: 'flex',
                backgroundColor: 'rgba(0,0,0,0.1)',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '8px',
                flexWrap: 'wrap',
                marginRight: '50px',
                marginTop: '50px',
            },
            divBox: {
                marginLeft: '20px',
                marginRight: '10px',
                marginTop: '20px',
                marginBottom:'10px',
            },
            chip: {
                backgroundColor: 'red',
                color: 'white',
                marginRight: '5px',
                '&:hover':
                {
                backgroundColor: 'white',
                color: 'red',
                },
                '&:focus':
                {
                backgroundColor: 'red',
                color: 'white'
                }
            }
        }));

        const widgetStyles = makeStyles();

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

        const CssTextField = withStyles({
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
                  minWidth: '100%'
                }
              },
              '& .input::-webkit-clear-button': {
                '& .input::-webkit-outer-spin-button': {
                  '& .input::-webkit-inner-spin-button': {
                    display: "none",
                    margin: 80
                  },
                },
              }
            },
            '@global': {
              '.MuiFormControl-root': {
                width: '100%',
              },
              '.MuiAutocomplete-tag': {
                backgroundColor: 'red',
                color: 'white',
              },
              '.MuiAutocomplete-option':	{
                minHeight: '10px'
              }
            },
          })(TextField);

        return (
            <div className="selectionTest__searchwidget">
                <p classes={{justifyText:'center'}}>Directly search by title or person</p>
                <Autocomplete
                    // className={widgetStyles.searchBox}
                    freeSolo
                    disableClearable
                    onChange={onSelect}
                    size='small'
                    id="combo-box-demo"
                    options={autocompleteoptions}
                    renderOption={(option) => (
                        <React.Fragment>
                            <p className="selectionTest__checkboxtext">{option.title}</p>
                        </React.Fragment>
                    )}
                    renderInput={params => (
                        <CssTextField
                            {...params}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            InputProps={{ ...params.InputProps, type: 'search' }}
                        />
                    )}
                />
                <div>
                    {generateTags()}
                    <p className='selectionTest__tagTitle'>or browse stories tagged with a specific topic: </p>
                    {
                        featuredtags.map(tag => {
                            return (
                                <CssChip label={tag} 
                                classes={widgetStyles.chip}
                                onClick={() => onTagSelect(tag)} 
                                key={tag}/>
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
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { TextField, Chip } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { StaticQuery, graphql, navigate } from "gatsby"

class SearchWidget extends React.Component {
    render() {

        const widgetStyles = makeStyles(theme => ({
            searchBox: {
                maxHeight: '10px',
                width: '76%',
            },
            tagBox: {
                display: 'flex',
                backgroundColor: 'rgba(0,0,0,0.1)',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '8px',
                flexWrap: 'wrap',
            }
        }));

        const c = (event, values) => {
            navigate(values.slug)
        }

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
            //console.log(event)
            navigate("/selectionTest", {
                state: { searchTag: { event } },
            })
        }

        return (
            <div className={widgetStyles.searchBox}>
                <h3>Directly search by title or person</h3>
                <Autocomplete
                    className={widgetStyles.searchBox}
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
                        <TextField
                            {...params}
                            label="Search input"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            InputProps={{ ...params.InputProps, type: 'search' }}
                        />
                    )}
                />
                <div classes={widgetStyles.tagBox}>
                    {generateTags()}
                    <p>or browse stories tagged with a specific topic</p>
                    {
                        featuredtags.map(tag => {
                            return (
                                <Chip label={tag} onClick={

                                    () => onTagSelect(tag)} />
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
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import { Grid, Button } from '@material-ui/core'
import { SquareFlagIcon, CountryKey, toTitleCase } from './../components/SquareFlagIcon'
import { Page } from './../layouts/Page';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Navbar from './../components/Navbar'
import FilterDrawer from './../components/FilterDrawer'

import { Card, CardMedia, Button as MaterialButton, CardActions, Checkbox } from '@material-ui/core';
import { CardActionArea, CardContent, Typography, Fab } from '@material-ui/core'
import { FormControl, Drawer, List, ListSubheader, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { FormControlLabel, FormLabel, Radio, RadioGroup, Container } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search'
import { TextField } from '@material-ui/core';
import ReactCountryFlag from "react-country-flag";

import '@styles/pages/SelectionTest.scss'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1.5),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  list: {
    width: 270,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    // width: '100%',
    // maxWidth: 1500,
    // maxHeight: 1300, 
    backgroundColor: 'white', //theme.palette.background.paper,
    justifyItems: 'center'
  },
  grid: {
    backgroundColor: 'blue',
    justifyItems: 'center'
  },

  nested: {
    paddingLeft: theme.spacing(4),
    padding: 1
  },
  card: {
    maxWidth: 320,
    minWidth: 320,
    width: '100%',
    marginRight: '5px',
    marginLeft: '5px',
    marginTop: '5px',
    marginBottom: '5px',
    backgroundColor: 'white',
    flexWrap: 'wrap'
  },
  searchBox: {
    maxWidth: 240,
    minWidth: 240,
    maxHeight: 20,
    minHeight: 20,
    marginRight: '3px'
  },
  searchSubmitButton: {
    backgroundColor: 'red',
    maxWidth: 10,
    color: 'white',
    marginBottom: '10px',
    marginTop: '10px',
    marginRight: '10px'
  },
  resultsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    color: 'red',
    marginBottom: '5px',
    marginTop: '5px'
  },
  fab: {
    backgroundColor: 'red',
    color: 'white',
    marginRight: '5px',
  },
  cardContent: {
    justifyContent: 'center',
  },
  description: {
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '8.4px',
    height: 40.0333,
    overflow: 'hidden',
  },
  cardActions: {
    justifyContent: 'center',
    bottom: '0%'
  },
  buttonSection: {
    textAlign: 'center',
    backgroundColor: 'white',
  }, 
  // item padding in lists
  item: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: '5px',
    marginLeft: '5px',
  }
})); 

export const SelectionPageTemplate = ({
  title
  
}) => (
    <div>
        <h1>{title}</h1>
    </div>
)

SelectionPageTemplate.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

function GenerateTags(edges) {
  let t = [];
  edges.map( ({node}) => 
    {
      node.frontmatter.tags.map(storyTag => {
        if (!t.includes(storyTag.toLowerCase()))
        t.push(storyTag.toLowerCase()) 
      })
    })
  return t;
}

function GenerateCountries(edges) { 
  let t = [];
  edges.map( ({node}) => 
    {
        if (!t.includes(node.frontmatter.country.toLowerCase()))
        t.push(node.frontmatter.country.toLowerCase())
    })
  return t.map(toTitleCase)
}


const SelectionPage = ( { data } ) => {

    const  { allMarkdownRemark } = data 
    const { frontmatter, html } = allMarkdownRemark

  return (
    <Page>
      <div className={'selectionTest__headerBox'}>
      <h2 className='selectionTest__title'>-</h2>  
       <h1 className='selectionTest__title'>Search Stories</h1>  
      </div>
      <div>    
      </div>
      { /* Filter Row */ }
        <FilterDrawer
          edges={allMarkdownRemark.edges}
          tags={GenerateTags(allMarkdownRemark.edges).sort()}
          countries={GenerateCountries(allMarkdownRemark.edges).sort()}>
        </FilterDrawer>
    </Page>
  )
}

SelectionPage.propTypes = {
  data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.object,
      }),
  }),
}

export const blogQuery = graphql`
query SelectionPageTemplate {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        filter: { frontmatter: { templateKey: { eq: "story-page" } } } 
    ) {
        edges {
            node {
                frontmatter {
                    title
                    country
                    date
                    description
                    image
                    tags
                }
                fields {
                  slug
                }
            }
        }
    }
  }
`
export default SelectionPage
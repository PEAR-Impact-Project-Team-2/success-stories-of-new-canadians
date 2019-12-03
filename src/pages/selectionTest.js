import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Grid, Button } from '@material-ui/core'
import { Page } from './../layouts/Page';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardMedia, Button as MaterialButton, CardActions, Checkbox } from '@material-ui/core';
import { CardActionArea, CardContent, Typography, Fab } from '@material-ui/core'
import { FormControl, Drawer, List, ListSubheader, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { FormControlLabel, FormLabel, Radio, RadioGroup, Container } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import '@styles/pages/Index.scss'

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    list: {
      width: 270,
    },
    fullList: {
      width: 'auto',
    },
    root: {
      width: '100%',
      maxWidth: 250,
      maxHeight: 100, 
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    card: {
      maxWidth: 550,
    },
  })); 
  

function FilterDrawer(props) {

    const nestedClasses = useStyles();
  
    const [nameOpen, setNameOpen] = React.useState(true);
    const [countryOpen, setCountryOpen] = React.useState(false);
    const [tagOpen, setTagOpen] = React.useState(false);
    
    // Possible Options
    const countries = ['England', 'Scotland', 'Wales', 'Ireland', 'Germany'] 
    const dateNames = ['Date - Newest First', 'Date - Oldest First', 'A to Z', 'Z to A']
  
    const [filterCountrySetting, setCountrySetting] = React.useState(['Include All']);
    const [filterTagSetting, setTagSetting] = React.useState(props.tags); 
    const [filterDateNameSetting, setFilterDateNameSetting] = React.useState(dateNames[0]);
    const [update, setUpdate] = React.useState(false); 
  
    const handleClick = (e) => {
      if (e === 0) setNameOpen(!nameOpen);
      else if (e === 1) setCountryOpen(!countryOpen);
      else if (e === 2) setTagOpen(!tagOpen); 
    };
  
    const updateFilter = () => {
      console.log("refresh the filter.")
      setUpdate(!update); 
    }
  
    const handleDateNameChange = event => {
      setFilterDateNameSetting(event.target.value); 
      updateFilter(); 
    }
  
    const handleCountryChange = event => {
      console.log(event.target.name + " " + event.target.checked);
  
      if (event.target.name === 'Include All')  {
        setCountryOpen (!event.target.checked); 
        if (event.target.checked) setCountrySetting(countries); 
        else setCountrySetting([]); 
      }
      // if box is no longer selected
      else if (!event.target.checked)
      {
        var index = filterCountrySetting.indexOf(event.target.name);
        if (index > -1) filterCountrySetting.splice(index, 1); 
      }
      else 
      { 
        filterCountrySetting.push(event.target.name);
      }
      console.log(filterCountrySetting);
      updateFilter(); 
    }
  
    const handleTagChange = event => {
      console.log(event.target.name + " " + event.target.checked);
  
      if (event.target.name === 'Include All')  {
        setTagOpen (!event.target.checked); 
        if (event.target.checked) setTagSetting(props.tags); 
        else setTagSetting([]); 
      }
      // if box is no longer selected
      else if (!event.target.checked)
      {
        var index = filterTagSetting.indexOf(event.target.name);
        if (index > -1) filterTagSetting.splice(index, 1); 
      }
      else 
      { 
        filterTagSetting.push(event.target.name);
      }
      console.log(filterTagSetting);
      updateFilter(); 
    }
  
    const [drawerState, setDrawerState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setDrawerState({ ...drawerState, [side]: open });
    };
   
    function sortNamesAlphabetically( a, b ) {

      if (filterDateNameSetting == 'A to Z' || filterDateNameSetting == 'Z to A') { 

        if ( a.node.frontmatter.title < b.node.frontmatter.title){
          return (filterDateNameSetting === dateNames[2]) ? -1 : 1;
        }
        if ( a.node.frontmatter.title > b.node.frontmatter.title ){
          return (filterDateNameSetting === dateNames[2]) ? 1 : -1;
        }
        return 0;
        }
      else  {
        if ( a.node.frontmatter.date < b.node.frontmatter.date){
          return (filterDateNameSetting === dateNames[0]) ? -1 : 1;
        }
        if ( a.node.frontmatter.date > b.node.frontmatter.date ){
          return (filterDateNameSetting === dateNames[0]) ? 1 : -1;
        }
        return 0;
      }
    }

    function filterTags(value)
    { 
      let b = false; 
      if (filterTagSetting === props.tags) return true;
      value.node.frontmatter.tags.map( tagCheck => 
        {
          if (filterTagSetting.includes(tagCheck)) 
          {
            b = true;
            return; 
          } 
        }); 
      return b; 
    }

    const sideList = side => (
      <div
        className={nestedClasses.list}
      >
        <List>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader= {
            <ListSubheader component="div" id="nested-list-subheader">
              Filter Stories
            </ListSubheader>
          }
          className={nestedClasses.root}
          >
          { /* Date Filtering */ }
          <ListItem button onClick={handleClick.bind(this, 0)}>
            <ListItemText primary="by Name/Date" />
            {nameOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            </List>
          </Collapse>
          <Collapse in={nameOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <FormControl component="fieldset" className={nestedClasses.formControl}>
              <FormLabel component="legend"></FormLabel>
              <RadioGroup aria-label="name" name="name1" value={filterDateNameSetting} onChange={handleDateNameChange}>
                {dateNames.map( item => {
                  return (
                  <ListItem button className={nestedClasses.nested}>
                    <FormControlLabel className={nestedClasses.formControlLabel} value={item} control={<Radio />} label={item} />
                  </ListItem>
                  )
                })}
                </RadioGroup>
            </FormControl>
            </List>
          </Collapse>     
  
          { /* Country Filtering */ }
  
          <ListItem>
            <ListItemText primary="by Country" />        
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button className={nestedClasses.nested}>
              <Checkbox name='Include All' label='Include All' onClick={handleCountryChange} defaultChecked={!countryOpen}></Checkbox>Include All 
                </ListItem>
            </List>
          </Collapse>
          <Collapse in={countryOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
  
            {countries.map( item => {return (
              <ListItem button className={nestedClasses.nested}>
                <Checkbox name={item} label={item} onClick={handleCountryChange} defaultChecked={filterCountrySetting.includes(item)}></Checkbox>{item}
              </ListItem>) } ) } 
  
            </List>
          </Collapse>       
  
          { /* Tag Filtering */ }
  
          <ListItem>
            <ListItemText primary="by Tag" />
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button className={nestedClasses.nested}>
              <Checkbox name='Include All' label='Include All' onClick={handleTagChange} defaultChecked={!tagOpen}></Checkbox>Include All 
            </ListItem>
            </List>
          </Collapse>
          <Collapse in={tagOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding> 
  
            { props.tags.map(
              item => { return (
              <ListItem button className={nestedClasses.nested}>
              <Checkbox name={item} label={item} onClick={handleTagChange} defaultChecked={filterTagSetting.includes(item)}></Checkbox>{item}
              </ListItem>
              ) } )
            }
            </List>
          </Collapse> 
        </List>
        </List>
      </div>
    );
  
    return (
      <main alignItems="center">
        <div alignItems="center">
            <Button onClick={toggleDrawer('left', true)}>Filter Options</Button>

            <Drawer open={drawerState.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            > 
                <div style={{display: 'flex', flexWrap:'wrap', alignContent:'space-between', maxWidth: '1500px'}} className={nestedClasses.root}>
                    {props.edges.filter(({node}) => 
                        (filterCountrySetting.includes(node.frontmatter.country) || !countryOpen)
                    ).filter(filterTags).length > 0 ? 
                    <div>
                        { props.edges.filter(({node}) => 
                            (filterCountrySetting.includes(node.frontmatter.country) || !countryOpen)
                            ).filter(filterTags).sort(sortNamesAlphabetically).map(({ node }, i) => (
                                <SelectionCard
                                    key={i}
                                    frontmatter={node.frontmatter}>
                                </SelectionCard> 
                        )) }
                    </div> : 
                    <h3>
                        No results found for filter settings.
                    </h3>}
                </div> 

            </Grid> 
    </div>
    </main>
    );
  }


  

function SelectionCard(props) {

    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Sample Story"
            height="225"
            image={props.frontmatter.featuredimage}
            title="Sample Story"
          />
          <CardContent>
            { 
              (props.frontmatter.featuredpost ? 
                <Typography gutterBottom variant="caption" component="p">
                  Featured post
                </Typography> : <></>)
            }
            <Typography gutterBottom variant="h5" component="h2">
              {props.frontmatter.title}
            </Typography>
            <Typography variant="caption" component="p">
              {props.frontmatter.date.split("T")[0]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.frontmatter.description}
            </Typography>
            <Grid
              spacing={5}>
            {
              props.frontmatter.tags.map( tagText => 
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="add"
                  marginLeft={5}
                  marginRgiht={5}
                >
                  {tagText}
                </Fab>
              )  
  
            }
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }

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
        if (!t.includes(storyTag))
        t.push(storyTag) 
      })
    })
  return t;
}

const SelectionPage = ( { data } ) => {

    const  { allMarkdownRemark } = data 
    const { frontmatter, html } = allMarkdownRemark

  return (
    <Page>
      <h1 className='selection__title'>View all our stories!</h1>
      <p className='index__text'>Filter through a list of stories by filtering below</p>
      <div>    
      {
          console.log(allMarkdownRemark)
      }
      </div>
      { /* Filter Row */ }
        <FilterDrawer
          edges={allMarkdownRemark.edges}
          tags={GenerateTags(allMarkdownRemark.edges)}>
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
                    featuredpost
                    featuredimage
                    tags
                }
            }
        }
    }
  }
`

export default SelectionPage
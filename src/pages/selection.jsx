/**
 * An example of using Material UI
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, Button as MaterialButton, CardActions, Checkbox } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withSeo } from '@utils';
import { Page } from '@layouts';
import { FormControl, Drawer, List, ListSubheader, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { CardActionArea, CardContent, Typography } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
  },
})); 

/*
function SortByMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [ 'Filter by Name', 'Filter by Tag', 'Filter by Country', 'Filter by Date' ]

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        ADD FILTERS
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}></MenuItem>
        <div>
        {options.map( item => {
          return (
            <div>
            <Checkbox label={item} onClick={handleClose}></Checkbox>{item}
            </div>
          );
        })}
        </div>
      </Menu>
    </div>
  );
}

function SortNameMenu() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('');

  const handleChange = event => {
    setOrder(event.target.value);
  };

  return (
    <div>
      {
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
        <Select
          labelId="name-sorting-select-label"
          id="name-sorting-select"
          value={order}
          onChange={handleChange}
        >
          <MenuItem value={10}>A to Z</MenuItem>
          <MenuItem value={20}>Z to A</MenuItem>
        </Select>
        </FormControl>
      }
    </div>
    
  );
} */

function NestedList() {
  const nestedClasses = useStyles();
  const [nameOpen, setNameOpen] = React.useState(true);
  const [countryOpen, setCountryOpen] = React.useState(false);
  const [tagOpen, setTagOpen] = React.useState(false);  
  const [filterNameSetting, setNameSetting] = React.useState('A to Z');
  const [filterCountrySetting, setCountrySetting] = React.useState(['Include All']);
  const [filterTagSetting, setTagSetting] = React.useState([]); 
  const [filterDateSetting, setFilterDateSetting] = React.useState('Newest First');

  // Possible Options
  const nameSorting = ['A to Z', 'Z to A']
  const countries = ['Include All', 'England', 'Scotland', 'Wales', 'Ireland', 'Germany'] 
  var tags = ['Tag1', 'Tag2', 'Tag3']
  var checkboxes = []; 

  var boxChecked = false; 

  const handleClick = (e) => {
    if (e === 0) setNameOpen(!nameOpen);
    else if (e === 1) setCountryOpen(!countryOpen);
    else if (e === 2) setTagOpen(!tagOpen); 
  };

  const updateFilter = () => {
    console.log("refresh the filter.")
  }

  const handleNameChange = event => {
    setNameSetting(event.target.value);
    updateFilter(); 
  }

  const handleCountryChange = event => {
    console.log(event.target.name + " " + event.target.checked);
    boxChecked = !boxChecked;

    if (!event.target.checked)
    {
      var index = filterCountrySetting.indexOf(event.target.name);
      if (index > -1) filterCountrySetting.splice(index, 1); 
    }
    else 
    {
      if (event.target.name === 'Include All')  {
        setCountrySetting(['Include All']) 
        checkboxes.map( item => { console.log(item.props.value) } ); 
      }
      else 
        (filterCountrySetting[0] === 'Include All') ? setCountrySetting([event.target.name]) : filterCountrySetting.push(event.target.name);
    }
    console.log(filterCountrySetting);
    updateFilter(); 
  }

  const handleTagChange = event => {
    console.log(event.target.name + " " + event.target.checked);

    if (!event.target.checked)
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

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filter Stories
        </ListSubheader>
      }
      className={nestedClasses.root}
    >
      { /* Name Filtering */ }
      <ListItem button onClick={handleClick.bind(this, 0)}>
        <ListItemText primary="by Name" />
        {nameOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={nameOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <FormControl component="fieldset" className={nestedClasses.formControl}>
        <FormLabel component="legend"></FormLabel>
        <RadioGroup aria-label="name" name="name1" value={filterNameSetting} onChange={handleNameChange}>

          {nameSorting.map( item => {
            return (
            <ListItem button className={nestedClasses.nested}>
              <FormControlLabel value={item} control={<Radio />} label={item} />
            </ListItem>
            )
          })}
          </RadioGroup>
        </FormControl>


        </List>
      </Collapse> 

      { /* Country Filtering */ }

      <ListItem button onClick={handleClick.bind(this, 1)}>
        <ListItemText primary="by Country" />
        {countryOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={countryOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        {countries.map( item => {return (
          <ListItem button className={nestedClasses.nested}>
            <Checkbox name={item} label={item} onClick={handleCountryChange}></Checkbox>{item}
          </ListItem>) } ) } 

        </List>
      </Collapse>         



      { /* Tag Filtering */ }

      <ListItem button onClick={handleClick.bind(this, 2)}>
        <ListItemText primary="by Tag" />
        {tagOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={tagOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        { tags.map(
           item => 
           <ListItem button className={nestedClasses.nested}>
          <Checkbox name={item} label={item} onClick={handleTagChange} ></Checkbox>{item}
           </ListItem>
          )
        }
        </List>
      </Collapse> 
     </List>
  );
}
{/*
  TODO: Figure out how to change the checked/unchecked state of a button through code. 
  WAS TRYING TO MAKE A CONTROLLABLE/DYNAMIC CHECK BOX HERE
class DynamicCheckBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: false, chk = 2}
  }

  handleChange = event => {
    console.log("changed" + this.state.value + " " + chk.checked);
    this.setState({value: !this.state.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return chk = (
      <CheckBox
      onClick={this.handleChange} checked={this.state.value}>
      </CheckBox> 
    ); 
  }
}*/ }

function FilterDrawer() {
  const [drawerState, setDrawerState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({ ...drawerState, [side]: open });
  };

  const sideList = side => (
    <div>
      <List>
        <NestedList>
        </NestedList>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>Filter Options</Button>
      <Drawer open={drawerState.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

const SelectionPage = () => (
    
    <Page className='selection'>
      <h1 className='selection__title'>View all our stories!</h1>
      <p className='index__text'>Filter through a list of stories by filtering below</p>
      <div className='containers'>

      { /* Filter Row */ }
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        <FilterDrawer className='temporary'> 
        </FilterDrawer>
      </Grid>

      <FilterResults>
      </FilterResults>   

      </div>
    </Page>
);

// Displays results from filtering 
function FilterResults()
{
  const rootSettings = useStyles()
  const storiesToDisplay = [ { title: 'story1', desc: 'first last 1', country: 'England'}, { title: 'story2', desc: 'first last 2', country: 'Ireland'} ]


  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Results
        </ListSubheader>
    }
    className={rootSettings.root}>
      {storiesToDisplay.map( story => { return(
        <div>
        <SelectionCard
           title={story.title}
           desc={story.desc}>
        
           </SelectionCard>
        </div>
      ) } )} 
    </List>
    </div>
  )
}

function SelectionCard(props) {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Sample Story"
          height="140"
          image="/static/demo-f362adb686ed8fa86a8c5e96437a264c.jpeg"
          title="Sample Story"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="caption" component="p">
            {props.desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Here is space for a little description to hook reader.
          </Typography>
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

export default withSeo(SelectionPage, {
  title: 'Home',
});

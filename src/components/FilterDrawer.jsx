import React from 'react'
import { navigate } from 'gatsby'
import { Grid, Button } from '@material-ui/core'
import { SquareFlagIcon } from './SquareFlagIcon'
import { Autocomplete } from '@material-ui/lab'
import { Card, CardMedia, CardActions, Checkbox, Chip } from '@material-ui/core';
import { CardActionArea, CardContent, Typography } from '@material-ui/core'
import { FormControl, Drawer, List, ListSubheader, ListItem, ListItemText, Collapse, Divider } from '@material-ui/core';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search'
import { TextField } from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import '@styles/pages/SelectionTest.scss'

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  list: {
    width: 270,
    marginTop: 80,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    backgroundColor: 'white', //theme.palette.background.paper,
    justifyItems: 'center'
  },
  autocompleteroot:
  {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
    padding: 1
  },
  searchSubmitButton: {
    backgroundColor: 'red',
    color: 'white',
    maxWidth: '36px',
    minWidth: '36px',
    height: '50%',
  },
  resultsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '10px',
  },
  button: {
    backgroundColor: 'white',
    color: 'red',
    marginBottom: '5px',
    marginTop: '5px',
  },
  sortButton: {
    backgroundColor: 'red',
    color: 'white',
    marginBottom: '15px',
    marginTop: '15px',
    '&:hover':
    {
      backgroundColor: 'white',
      color: 'red',
    },
  },
  fab: {
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
  item: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: '5px',
    marginLeft: '5px',
  }
}));

const useAutoCompleteStyles = makeStyles(theme => ({
  root: {
    justifyItems: 'center',
    color: 'black',
    backgroundColor: 'white'
  },
  autocompleteroot:
  {
    minWidth: '50%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
  searchBox: {
    marginLeft: '10px',
    marginRight: '5px',
    minWidth: '70%',
    maxWidth: '70%',
    minHeight: '50px',
    maxHeight: '50px',
  },
  buttonSection: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex',
    width: '100%',
  },
}));

export default function FilterDrawer(props) {

  const nestedClasses = useStyles();
  const autoCompleteClasses = useAutoCompleteStyles();

  const [nameOpen, setNameOpen] = React.useState(true);
  const [countryOpen, setCountryOpen] = React.useState(false);
  const [tagOpen, setTagOpen] = React.useState(!(props.initialTag == null));

  function includeAllCountries() { return filterCountrySetting.length === props.countries.length }
  function includeAllTags() { return filterTagSetting.length === props.tags.length }

  const [searchText, setSearchText] = React.useState(props.initialSearchText != null ? props.initialSearchText : "");

  var currentSearchText = "";

  // Possible Options
  const countries = props.countries;
  const dateNames = ['Date - Oldest First', 'Date - Newest First', 'A to Z', 'Z to A']

  const [filterCountrySetting, setCountrySetting] = React.useState(countries);
  const [filterTagSetting, setTagSetting] = React.useState(props.initialTag == null ? props.tags : [props.initialTag]);
  const [filterDateNameSetting, setFilterDateNameSetting] = React.useState(dateNames[0]);

  const handleClick = (e) => {
    if (e === 0) setNameOpen(!nameOpen);
    else if (e === 1) setCountryOpen(!countryOpen);
    else if (e === 2) setTagOpen(!tagOpen);
  };

  const handleCardTagClick = (event) => {
    setTagSetting([event])
    navigate("/selectionTest", {
      state: { searchTag: { event } },
    })
  }

  const handleDateNameChange = event => {
    setFilterDateNameSetting(event.target.value);
  }

  const handleCountryChange = event => {

    if (event.target.name === 'Include All') {
      setCountrySetting(props.countries);
      setCountryOpen(!event.target.checked);
      setCountrySetting(event.target.checked ? countries : []);
    }
    // if box is no longer selected
    else if (!event.target.checked) {
      var index = filterCountrySetting.indexOf(event.target.name);
      if (index > -1) filterCountrySetting.splice(index, 1);
    }
    else {
      filterCountrySetting.push(event.target.name);
    }
  }

  const handleTagChange = event => {

    if (event.target.name === 'Include All') {
      setTagSetting(props.tags);
      setTagOpen(!event.target.checked);
      if (event.target.checked) setTagSetting(props.tags);
      else setTagSetting([]);
    }
    // if box is no longer selected
    else if (!event.target.checked) {
      var index = filterTagSetting.indexOf(event.target.name);
      if (index > -1) filterTagSetting.splice(index, 1);
    }
    else {
      filterTagSetting.push(event.target.name);
    }
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

  function sortNamesAlphabetically(a, b) {

    if (filterDateNameSetting == 'A to Z' || filterDateNameSetting == 'Z to A') {

      if (a.node.frontmatter.title < b.node.frontmatter.title) {
        return (filterDateNameSetting === dateNames[2]) ? -1 : 1;
      }
      if (a.node.frontmatter.title > b.node.frontmatter.title) {
        return (filterDateNameSetting === dateNames[2]) ? 1 : -1;
      }
      return 0;
    }
    else {
      if (a.node.frontmatter.date < b.node.frontmatter.date) {
        return (filterDateNameSetting === dateNames[0]) ? -1 : 1;
      }
      if (a.node.frontmatter.date > b.node.frontmatter.date) {
        return (filterDateNameSetting === dateNames[0]) ? 1 : -1;
      }
      return 0;
    }
  }

  function filterTags(value) {
    let b = false;
    if (filterTagSetting === props.tags) return true;
    value.node.frontmatter.tags.forEach(tagCheck => {
      if (filterTagSetting.includes(tagCheck)) {
        b = true;
        return;
      }
    });
    return b;
  }

  function onSearchSubmit() {
    setSearchText(currentSearchText);
  }

  const search = (e) => {
    currentSearchText = e.target.value;
  }

  const sideList = side => (
    <div
      className={nestedClasses.list}
    >
      <title>Navigation bar for desktop and larger screens.</title>
      <List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <Typography variant="h5">Filter Stories</Typography>
            </ListSubheader>
          }
          className={nestedClasses.root}
        >
          { /* Date Filtering */}
          <ListItem button onClick={handleClick.bind(this, 0)}>
            <ListItemText primary="Sort by Name/Date" />
            {nameOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            </List>
          </Collapse>
          <Collapse in={nameOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={true} style={{marginLeft: '11px'}}>
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup aria-label="name" name="name1" value={filterDateNameSetting} onChange={handleDateNameChange}>
                  {dateNames.map(item => {
                    return (
                      <ListItem button className={nestedClasses.nested} key={'listitem' + item}>
                        <FormControlLabel key={item} value={item} control={<CssRadio />}/>{item}
                      </ListItem>
                    )
                  })}
                </RadioGroup>
              </FormControl>
            </List>
          </Collapse>
          <Divider/>
          { /* Country Filtering */}

          <ListItem button onClick={handleClick.bind(this, 1)}>
            <ListItemText primary="by Country" />
            {(!includeAllCountries()) ? (countryOpen ? <ExpandLess /> : <ExpandMore />) :
              null}
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={nestedClasses.nested}>
                <CssCheckbox name='Include All' label='Include All' key='InlcAllCount' onClick={handleCountryChange} defaultChecked={includeAllCountries()}></CssCheckbox>Include All
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={!includeAllCountries() && countryOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={true} padding={1}>

              {countries.map(item => {
                return (
                  <ListItem button className={nestedClasses.nested} key={'listitem' + item}>
                    <CssCheckbox name={item} key={item} onClick={handleCountryChange} defaultChecked={filterCountrySetting.includes(item)}>
                    </CssCheckbox>{item}
                  </ListItem>)
              })}

            </List>
          </Collapse>
          <Divider/>
          { /* Tag Filtering */}

          <ListItem button onClick={handleClick.bind(this, 2)}>
            <ListItemText primary="by Tag" />
            {(!includeAllTags()) ? (tagOpen ? <ExpandLess /> : <ExpandMore />) :
              null}
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={nestedClasses.nested}>
                <CssCheckbox name='Include All' label='Include All' key='InlcAllTag' onClick={handleTagChange} defaultChecked={includeAllTags()}></CssCheckbox>Include All
          </ListItem>
            </List>
          </Collapse>

          <Collapse in={!includeAllTags() && tagOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              {props.tags.map(
                item => {
                  return (
                    <ListItem button className={nestedClasses.nested} key={'listitem' + item}>
                      <CssCheckbox name={item} label={item} onClick={handleTagChange} key={item} defaultChecked={filterTagSetting.includes(item)}></CssCheckbox>{item}
                    </ListItem>
                  )
                })
              }
            </List>
          </Collapse>
          <Divider/>
        </List>
      </List>
    </div>
  );

  function filterSearchBar(value) {
    if (searchText.length === 0) return true;
    let words = searchText.toLowerCase().split(" ");
    let res = false;
    words.forEach((st) => {
      if (value.node.frontmatter.title.toLowerCase().indexOf(st) != -1 ||
        value.node.frontmatter.tags.includes(st) ||
        value.node.frontmatter.country.toLowerCase().indexOf(st) != -1) {
        res = true;
        return;
      }
    }
    );
    return res;
  }

  function getFilteredResults() {
    return props.edges.filter(({ node }) =>
      (filterCountrySetting.includes(node.frontmatter.country) || includeAllCountries())
    ).filter(filterTags).filter(filterSearchBar);
  }

  const CssCheckbox = withStyles({
    root: {
      color: 'red',
      '&$checked': {
        color: 'red',
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

  const CssRadio = withStyles({
    root: {
      color: 'red',
      '&$checked': {
        color: 'red',
      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);

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
          minWidth: '115%'
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
      '.MuiAutocomplete-option': {
        minHeight: '10px'
      }
    },
  })(TextField);

  const autocompleteoptions = props.edges.map(({ node }) => {
    return {
      title: "'" + node.frontmatter.title + "'" + ' from ' + node.frontmatter.author,
      country: node.frontmatter.country,
      slug: node.fields.slug
    }
  });

  const c = (event, values) => {
    if (values.slug !== undefined)
      navigate(values.slug)
  }

  return (
    <main>
      <div className={autoCompleteClasses.root}>
        <p className='index__text'> Find your next inspiration.</p>
        <div className={autoCompleteClasses.buttonSection}>
          <Autocomplete
            className={autoCompleteClasses.searchBox}
            freeSolo
            disableClearable
            onChange={c}
            size='small'
            margin='dense'
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
                margin="dense"
                variant="outlined"
                margin="none"
                fullWidth
                styles={{
                  '& .input::-webkit-clear-button': {
                    '& .input::-webkit-outer-spin-button': {
                      '& .input::-webkit-inner-spin-button': {
                        display: "none",
                      },
                    },
                  }
                }}
                endAdornment={
                  <React.Fragment>
                    <SearchIcon></SearchIcon>
                  </React.Fragment>
                }
                onChange={search}
                InputProps={{ ...params.InputProps, type: 'search' }}
                onKeyPress={(ev) => {
                  if (ev.key === 'Enter') {
                    onSearchSubmit();
                  }
                }}
              />)}
          />
          <Button key="search" aria-label='search submit button' className={nestedClasses.searchSubmitButton} onClick={onSearchSubmit.bind()}><SearchIcon></SearchIcon></Button>
        </div>
        <div className={autoCompleteClasses.buttonSection}>
          <Button key="drawer" className={nestedClasses.sortButton} onClick={toggleDrawer('left', true)}>
            {'Sort by Tag / Country' + ((filterTagSetting.length * (includeAllTags() ? 0 : 1) + filterCountrySetting.length * (includeAllCountries() ? 0 : 1)) == 0 ? '' :
              ' (' + (filterTagSetting.length * (includeAllTags() ? 0 : 1) + filterCountrySetting.length * (includeAllCountries() ? 0 : 1) + ')'))}
          </Button>
        </div>
        <Drawer open={drawerState.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <h3 style={{ textAlign: 'center' }}>
            {((searchText != null && searchText.length > 0) ? "Results for: '" + searchText + "' with current tag and country filtering. Click search again to return." : "")}
          </h3>
          <div style={{ backgroundColor: 'transparent', justifyItems: 'center' }}>
            {getFilteredResults().length > 0 ?
              <div className={nestedClasses.resultsBox}>
                {getFilteredResults().sort(sortNamesAlphabetically).map(({ node }, i) => (
                  <SelectionCard
                    key={i}
                    frontmatter={node.frontmatter}
                    fields={node.fields}
                    tagCallback={handleCardTagClick}>
                  </SelectionCard>
                ))}
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
    <Card className='selectionTest__cardStyles'>
      <meta name="story" content={props.frontmatter.title + " " + props.frontmatter.country + " " + props.frontmatter.description}></meta>
      <CardActionArea>
        <CardMedia
          component="img"
          height='225'
          width='100%'
          image={props.frontmatter.image}
          alt='image for this story'
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">

            {props.frontmatter.title} </Typography>

          <div className={classes.item}>
            <SquareFlagIcon countryName={props.frontmatter.country} countryCode="" className={classes.item}></SquareFlagIcon>
            <Typography variant='caption' component="p" className={classes.item} > {props.frontmatter.country} </Typography>
          </div>
          <Typography variant="caption" component="p">
            {props.frontmatter.date.split("T")[0]}
          </Typography>


          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {props.frontmatter.description}
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {
              props.frontmatter.tags.map(tagText =>
                <Chip
                  className={classes.fab}
                  key={tagText + props.frontmatter.title}
                  size="small"
                  onClick={() => props.tagCallback(tagText)}
                  label={tagText}
                >
                  {tagText}
                </Chip>
              )

            }
          </Grid>
          <CardActions className={classes.cardActions}>
            <Button className={classes.button} size="small" color="primary" onClick={() => { navigate(props.fields.slug) }}>
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
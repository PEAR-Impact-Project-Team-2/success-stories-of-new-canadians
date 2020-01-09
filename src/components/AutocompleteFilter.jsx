// import React from 'react'
// import { navigate } from 'gatsby'
// import { Grid, Button } from '@material-ui/core'
// import { SquareFlagIcon } from './SquareFlagIcon'
// import { Autocomplete } from '@material-ui/lab'
// import { CheckBoxOutlineBlankIcon, CheckBoxIcon, ContactSupportOutlined } from '@material-ui/icons'
// import { Card, CardMedia, CardActions, Checkbox, Chip } from '@material-ui/core';
// import { CardActionArea, CardContent, Typography, Fab } from '@material-ui/core'
// import { FormControl, Drawer, List, ListSubheader, ListItem, ListItemText, Collapse } from '@material-ui/core';
// import { FormControlLabel, FormLabel, Radio, RadioGroup, Container } from '@material-ui/core'
// import { ExpandLess, ExpandMore } from '@material-ui/icons';
// import SearchIcon from '@material-ui/icons/Search'
// import { TextField } from '@material-ui/core';

// import { makeStyles, withStyles } from '@material-ui/core/styles';

// import '@styles/pages/SelectionTest.scss'

// const useStyles = makeStyles(theme => ({
//   selectEmpty: {
//     marginTop: theme.spacing(1),
//   },
//   list: {
//     width: 270,
//   },
//   fullList: {
//     width: 'auto',
//   },
//   root: {
//     backgroundColor: 'white', //theme.palette.background.paper,
//     justifyItems: 'center'
//   },
//   autocompleteroot:
//   {
//     width: 500,
//     '& > * + *': {
//       marginTop: theme.spacing(3),
//     },
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//     padding: 1
//   },
//   card: {
//     maxWidth: 320,
//     minWidth: 320,
//     width: '100%',
//     marginRight: '5px',
//     marginLeft: '5px',
//     marginTop: '5px',
//     marginBottom: '5px',
//     backgroundColor: 'white',
//     flexWrap: 'wrap'
//   },
//   searchBox: {
//     minHeight: 20,
//     width: '90%',
//     // marginLeft: '10px',
//     // marginRight: '10px'
//   },
//   buttonSection: {
//     textAlign: 'center',
//     justifyItems: 'center',
//     justifyContent: 'center'
//   }, 
//   searchSubmitButton: {
//     backgroundColor: 'red',
//     maxWidth: 10,
//     color: 'white',
//     marginBottom: '10px',
//     marginTop: '10px',
//     marginLeft: '10px',
//     marginRight: '10px'
//   },
//   resultsBox: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: 'white',
//     color: 'red',
//     marginBottom: '5px',
//     marginTop: '5px'
//   },
//   fab: {
//     backgroundColor: 'red',
//     color: 'white',
//     marginRight: '5px',
//   },
//   cardContent: {
//     justifyContent: 'center',
//   },
//   description: {
//     justifyContent: 'center',
//     textAlign: 'center',
//     marginBottom: '8.4px',
//     height: 40.0333,
//     overflow: 'hidden',
//   },
//   cardActions: {
//     justifyContent: 'center',
//     bottom: '0%'
//   },
//   // item padding in lists
//   item: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginRight: '5px',
//     marginLeft: '5px',
//   }
// })); 

// const useAutoCompleteStyles = makeStyles(theme => ({
//   root: {
//     justifyItems: 'center',
//     color: 'black',
//     backgroundColor:'white'
//   },
//   autocompleteroot:
//   {
//     minWidth: '50%',
//     '& > * + *': {
//       marginTop: theme.spacing(3),
//     },
//   },
//   searchBox: {
//     minHeight: 20,
//     minWidth: '50%',
//     marginLeft: '10px',
//     marginRight: '10px'
//   },
//   buttonSection: {
//     textAlign: 'center',
//     justifyItems: 'center',
//     justifyContent: 'center'
//   }, 
// })); 

// export default function AutocompleteFilter(props) {

//   const nestedClasses = useStyles();
//   const autoCompleteClasses = useAutoCompleteStyles();

//   const [nameOpen, setNameOpen] = React.useState(true);
//   const [countryOpen, setCountryOpen] = React.useState(false);
//   const [tagOpen, setTagOpen] = React.useState(false);
//   const [includeAllCountries, setIncludeAllCountries] = React.useState(true);
//   const [includeAllTags, setIncludeAllTags] = React.useState(true); 
//   const [searchText, setSearchText] = React.useState(""); 

//   // Possible Options
//   const countries = props.countries;
//   const dateNames = ['Date - Oldest First', 'Date - Newest First', 'A to Z', 'Z to A']

//   const [filterCountrySetting, setCountrySetting] = React.useState(countries);
//   const [filterTagSetting, setTagSetting] = React.useState(props.tags); 
//   const [filterDateNameSetting, setFilterDateNameSetting] = React.useState(dateNames[0]);
//   const [update, setUpdate] = React.useState(false); 

//   const handleClick = (e) => {
//     if (e === 0) setNameOpen(!nameOpen);
//     else if (e === 1) setCountryOpen(!countryOpen);
//     else if (e === 2) setTagOpen(!tagOpen); 
//   };

//   const updateFilter = () => {
//     setUpdate(!update); 
//   }

//   const handleDelete = e => () => {
//     console.log(e)
//   }

//   const handleAutoCompleteChange = event => {
//     console.log(event.target.value);
//     if (event.target.value[0] == 't')
//     {
//       let v = event.target.value.substring(1);
//       if (event.target.checked) filterTagSetting.push(v) 
//       else { 
//         let index = filterTagSetting.indexOf(v);
//         if (index > -1) filterTagSetting.splice(index, 1); 
//       }
//     }
//     else if (event.target.value[0] == 'c')
//     {
//       let v = event.target.value.substring(1);
//       if (event.target.checked) filterCountrySetting.push(v) 
//       else { 
//         var index = filterCountrySetting.indexOf(v);
//         if (index > -1) filterCountrySetting.splice(index, 1); 
//       }
//     }
//   }

//   const handleDateNameChange = event => {
//     setFilterDateNameSetting(event.target.value); 
//     updateFilter(); 
//   }

//   const handleCountryChange = event => {

//     if (event.target.name === 'Include All')  {
//       setIncludeAllCountries (event.target.checked); 
//       setCountryOpen(!event.target.checked); 
//       setCountrySetting(event.target.checked ? countries : []); 
//     }
//     // if box is no longer selected
//     else if (!event.target.checked)
//     {
//       var index = filterCountrySetting.indexOf(event.target.name);
//       if (index > -1) filterCountrySetting.splice(index, 1); 
//     }
//     else 
//     { 
//       filterCountrySetting.push(event.target.name);
//     }
//     updateFilter(); 
//   }

//   const handleTagChange = event => {

//     if (event.target.name === 'Include All')  {
//       setIncludeAllTags(event.target.checked); 
//       setTagOpen (!event.target.checked); 
//       if (event.target.checked) setTagSetting(props.tags); 
//       else setTagSetting([]); 
//     }
//     // if box is no longer selected
//     else if (!event.target.checked)
//     {
//       var index = filterTagSetting.indexOf(event.target.name);
//       if (index > -1) filterTagSetting.splice(index, 1); 
//     }
//     else 
//     { 
//       filterTagSetting.push(event.target.name);
//     }
//     updateFilter(); 
//   }

//   const [drawerState, setDrawerState] = React.useState({
//     left: false,
//   });

 
//   function sortNamesAlphabetically( a, b ) {

//     if (filterDateNameSetting == 'A to Z' || filterDateNameSetting == 'Z to A') { 

//       if ( a.node.frontmatter.title < b.node.frontmatter.title){
//         return (filterDateNameSetting === dateNames[2]) ? -1 : 1;
//       }
//       if ( a.node.frontmatter.title > b.node.frontmatter.title ){
//         return (filterDateNameSetting === dateNames[2]) ? 1 : -1;
//       }
//       return 0;
//       }
//     else  {
//       if ( a.node.frontmatter.date < b.node.frontmatter.date){
//         return (filterDateNameSetting === dateNames[0]) ? -1 : 1;
//       }
//       if ( a.node.frontmatter.date > b.node.frontmatter.date ){
//         return (filterDateNameSetting === dateNames[0]) ? 1 : -1;
//       }
//       return 0;
//     }
//   }

//   function filterTags(value)
//   { 
//     let b = false; 
//     if (filterTagSetting === props.tags) return true;
//     value.node.frontmatter.tags.map( tagCheck => 
//       {
//         if (filterTagSetting.includes(tagCheck)) 
//         {
//           b = true;
//           return; 
//         } 
//       }); 
//     return b; 
//   }

//   function filterSearchBar(value)
//   { 
//     if (searchText.length === 0) return true;
//     return (value.node.frontmatter.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
//   }

//   function getFilteredResults() 
//   {
//     return props.edges.filter(({node}) => 
//       (filterCountrySetting.includes(node.frontmatter.country) || includeAllCountries)
//       ).filter(filterTags).filter(filterSearchBar); 
    
//   }

//   const CssTextField = withStyles({
//     root: {
//       '& label.Mui-focused': {
//         color: 'red',
//       },
//       '& .MuiInput-underline:after': {
//         borderBottomColor: 'red',
//       },
//       '& .MuiFormLabel-root': {
//          color: 'red',
//       },
//       '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//           borderColor: 'red',
//         },
//         '&:hover fieldset': {
//           borderColor: 'red',
//         },
//         '&.Mui-focused fieldset': {
//           borderColor: 'red',
//         },
//       },
//     },
//     '@global': {
//       '.MuiFormControl-root': {
//         width: '100%',
//       },
//       '.MuiAutocomplete-tag': {
//         backgroundColor: 'red',
//         color: 'white',
//       }
//     },
//   })(TextField);

//   const autocompleteoptions =  props.tags.map(function(val) {
//     return { title: "'" + val + "'", value: val, type: 'tag' }
//   }).concat(
//     props.countries.map(function (val) { 
//       return { title: 'from ' + val, value: val, type: 'country' }
//     }));

//   return (
//     <main>
//       <div className={autoCompleteClasses.root}> 
//         <p className='index__text' justifyContent='center'> Find your next inspiration by their background, interests and contributions.</p>
//             <div className={autoCompleteClasses.buttonSection}>
//                 <Autocomplete
//                     className={autoCompleteClasses.searchBox}
//                     multiple
//                     size='small'
//                     options={autocompleteoptions}
//                     getOptionLabel={option => option.title}
//                     renderOption={(option, { selected }) => (
//                     <React.Fragment>
//                         <Checkbox
//                             iconStyle={{ marginRight: 8, primaryColor: 'red'}}
//                             labelStyle={{color: 'red'}}
//                             checked={selected}
//                             size='small'
//                             onClick={handleAutoCompleteChange}
//                             value={option.type[0] + option.value}
//                         />
//                         <p class={"selectionTest__checkboxtext"}>{option.title + "  "}</p>
//                         <SquareFlagIcon countryName={option.value} countryCode=""></SquareFlagIcon> 
//                     </React.Fragment>
//                     )}
//                     renderInput={params => (
//                     <CssTextField
//                         {...params}
//                         variant="outlined"
//                         label="Filter by Country or Tag"
//                         placeholder="Add filter ..."
//                     />
//                     )}
//                     renderTags={(value, getTagProps) =>
//                         value.map((option, index) => (
//                         <Chip className="selectionTest__checkboxtext" label={option.title} onClick={handleDelete} onDelete={handleDelete} {...getTagProps({ index })} />
//                         ))
//                     }
//                 />
//                 <Button key="search" className={nestedClasses.searchSubmitButton} onClick={updateFilter}><SearchIcon></SearchIcon></Button>

//                 <CssTextField
//                     className={nestedClasses.searchBox}
//                     defaultValue={currentSearchText}
//                     label="Search by name / title"
//                     onChange = { search.bind(this) }
//                     variant="outlined"
//                     id="custom-css-outlined-input"
//                     onKeyPress={event => {
//                     if (event.key === 'Enter') {
//                         onSearchSubmit()
//                     }
//                     }}></CssTextField>
//           <Button key="search" className={nestedClasses.searchSubmitButton} onClick={onSearchSubmit.bind()}><SearchIcon></SearchIcon></Button>
//       </div>
//           <Drawer open={drawerState.left} onClose={toggleDrawer('left', false)}>
//               {sideList('left')}
//           </Drawer>
//           <h3>
//             {(searchText.length > 0 ? "Results for: '" + searchText + "' with current tag and country filtering. Click search again to return." : "")}
//           </h3>
//           <Grid
//               container
//               direction="row"
//               justify="center"
//               alignItems="center"              
//           > 
//               <div className={nestedClasses.root}>
//                   {getFilteredResults().length > 0 ? 
//                   <div className={nestedClasses.resultsBox}>
//                       { getFilteredResults().sort(sortNamesAlphabetically).map(({ node }, i) => (
//                           <SelectionCard
//                               key={i}
//                               frontmatter={node.frontmatter}
//                               fields={node.fields}>
//                           </SelectionCard> 
//                       )) }
//                   </div> : 
//                   <h3>
//                       No results found for filter settings.
//                   </h3>}
//               </div> 
//           </Grid> 
//     </div>
//   </main>
//   );
// }

// function SelectionCard(props) {

//   const classes = useStyles();
// //cinnuit
//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height='225'
//           image={props.frontmatter.image}
//         />
//         <CardContent className={classes.cardContent}>
//           <Typography gutterBottom variant="h5" component="h2">

//             {props.frontmatter.title} </Typography>

//             <div className={classes.item}>
//               <SquareFlagIcon countryName={props.frontmatter.country} countryCode="" className={classes.item}></SquareFlagIcon> 
//               <Typography variant='caption' component="p" className={classes.item} > {props.frontmatter.country} </Typography>
//             </div>
//             <Typography variant="caption" component="p">
//               {props.frontmatter.date.split("T")[0]}
//             </Typography>


//           <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
//             {props.frontmatter.description}
//           </Typography>
//           <Grid
//           container
//           direction="row"
//           justify="center"
//           alignItems="center"
//           >
//           {
//             props.frontmatter.tags.map( tagText => 
//               <Fab
//                 className={classes.fab}
//                 variant="extended"
//                 size="small"
//                 color="primary"
//                 aria-label="add"
//                 marginLeft={5}
//                 marginRight={5}
                
//               >
//                 {tagText}
//               </Fab>
//             )  

//           }
//           </Grid>
//         </CardContent>
//       </CardActionArea>
//       <CardActions className={classes.cardActions}>
//         <Button className={classes.button} size="small" color="primary" onClick={() => {navigate(props.fields.slug)}}>
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
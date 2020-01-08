import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import '@styles/components/Navbar.scss';
import { Autocomplete } from '@material-ui/lab'

import { TextField, Hidden } from '@material-ui/core'

import { StaticQuery, graphql, navigate } from "gatsby"

export default function MobileNavbar(props) {

    // const muiTheme = createMuiTheme({
    //     palette: {
    //       textColor: 'black',
    //       primary1Color: 'white',
    //       primary2Color: 'red',
    //       accent1Color: 'red',
    //       pickerHeaderColor: 'black',
    //       alternateTextColor: 'red',
    //     },
    //     appBar: {
    //       height: 60,
    //     },
    //   });

    const onSelect = (event, values) => {
        navigate(values.slug)
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

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
        },
        appBar: {
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        menuButton: {
          marginRight: theme.spacing(1),
        },
        hide: {
          display: 'none',
        },
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
        },
        drawerHeader: {
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(1),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: -drawerWidth,
        },
        contentShift: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      }));
    
    const classes = useStyles();

    const drawerWidth = 100;

    const [open, setOpen] = React.useState(false);
    const [searchOpen, setSearchOpen] = React.useState(false);
    const widgetStyles = makeStyles(theme => ({
        searchBox: {
          maxHeight: '10px',
        },
      }));

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSearchOpen = () => {
        setSearchOpen(true);
    };

    const handleSearchClose = () => {
        setSearchOpen(false);
    };

    return (
        <div className={classes.root}>
            {console.log(props.autocompleteoptions)}
          <CssBaseline />
          <AppBar
            position="fixed"
            // className={clsx(classes.appBar, {
            //   [classes.appBarShift]: open,
            // })}
            style={{ background: 'white' }}
          >
            <Toolbar>
              <IconButton
                color='red'
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
                </IconButton>
            <IconButton
                color='red'
                aria-label="open drawer"
                onClick={handleSearchOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <SearchIcon />
              </IconButton>
              {/* <IconButton
                color='red'
                aria-label="open"
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="p" noWrap style={{color: '#333'}}>
                Success Stories of New Canadians
              </Typography>
              
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <List>
              <Divider/>
              {props.navigation.map((entry) => (
                <ListItem button key={entry.text}>
                    { console.log(props.page + " " + entry.id)}
                  <li><a className={props.page === entry.id ? "nav-wrap__current" : "nav-wrap__other"} href={entry.relativelink}>{entry.text}</a></li>
                </ListItem>
              ))}
            </List>
          </Drawer>
          {/* Search Drawer */}
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={searchOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleSearchClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
            <Autocomplete
                className={widgetStyles.searchBox}
                freeSolo
                disableClearable
                margin='dense'
                onChange={onSelect}
                style={{ width: 350 }} 
                size='small'
                id="combo-box-demo"
                options={props.autocompleteoptions}
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
            </List>
          </Drawer>
        </div> 
    ); 
}

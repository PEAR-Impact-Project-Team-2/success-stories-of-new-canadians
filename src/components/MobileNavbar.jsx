import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { CssBaseline, Drawer, TextField, Hidden, ListItem, AppBar, Toolbar, List, Typography, Divider, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from '@material-ui/icons/Close';
import '@styles/components/Navbar.scss';
import { Autocomplete } from '@material-ui/lab'
import { StaticQuery, graphql, navigate } from "gatsby"
import HideOnScroll from '@components/HideOnScroll';

export default function MobileNavbar(props) {

    const onSelect = (event, values) => {
        if (values.slug !== undefined)
            navigate(values.slug)
        else
            navigate("/selectionTest", {
                state: { searchTag: null, searchText: currentSearchText },
            });
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
        drawerHeaderText: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
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
        rightSearch: {
            marginLeft: "auto",
            marginRight: 0,
        }
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
        setSearchOpen(false);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        handleDrawerClose();
    };

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
        <div className={classes.root}>
            <title>Navigation bar for mobile devices</title>
            <CssBaseline />
            <meta name="mobile-navbar" content="Mobile navigation bar." />
            <HideOnScroll {...props}>
                <AppBar
                    position="fixed"
                    style={{ background: 'white', height: 72 }}
                >
                    <Toolbar style={{ height: '100%' }}>
                        <meta name='mobile-navbar' content='Search bar to search blog stories on site' />
                        {!searchOpen ?
                            <React.Fragment>
                                <a id="logo" classes={{ marginLeft: -10 }}>
                                    <img src="/images/uploads/logo-icon-navbar.png" alt="logo" width="72px" style={{ marginRight: -1 + 'pxem' }} />
                                </a>
                                <IconButton
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" noWrap style={{ color: '#333' }}>
                                    Menu
                    </Typography>
                            </React.Fragment>
                            :
                            <Autocomplete
                                className={widgetStyles.searchBox}
                                freeSolo
                                disableClearable
                                margin='dense'
                                onChange={onSelect}
                                style={{ width: 500, alignContent: 'center' }}
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
                                        onChange={search}
                                        onKeyPress={(ev) => {
                                            if (ev.key === 'Enter') {
                                                onSearchSubmit();
                                            }
                                        }}
                                    />
                                )}
                            />}
                        {
                            props.page === 'selection' ? null :
                                <span className={classes.rightSearch}>
                                    <IconButton aria-label="open search" onClick={toggleSearch}>
                                        {searchOpen ? <CloseIcon /> : <SearchIcon />}
                                    </IconButton>
                                </span>
                        }
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
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
                    <li>
                    </li>
                    <IconButton aria-label='close-menu' onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <List>
                    <Divider />
                    {props.navigation.map((entry) => (
                        <ListItem button key={entry.text}>
                            <li><a className={props.page === entry.id ? "nav-wrap__current" : "nav-wrap__other"} href={entry.relativelink}>{entry.text}</a></li>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}

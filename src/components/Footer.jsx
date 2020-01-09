import React from 'react'
import { Button, Grid, Hidden } from '@material-ui/core'
import '@styles/components/Footer.scss';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { navigation } from '@components/Directory'
import { makeStyles } from '@material-ui/core/styles';


export default function Footer() {
    const useStyles = makeStyles(theme => ({
        navButton: {
            color: "white",
            '&:hover':
            {
                color: 'red',
            },
        },
    }));

    const styleZ = useStyles(); 

    const socialMedia = [
        
        {
            "alt": "Facebook",
            "outlink": 'https://www.facebook.com/azhar.laher',
            imagelink: require("../assets/facebook.svg"),
        },
        {
            "alt": "Instagram",
            "outlink": 'https://www.instagram.com/azhar_laher/?hl=en',
            imagelink: require("../assets/instagram.svg"),
        },
        {
            "alt": "Twitter",
            "outlink": 'https://twitter.com/azharlaher?lang=en',
            imagelink: require("../assets/twitter.svg"),
        },
        {
            "alt": "LinkedIn",
            "outlink": 'https://www.linkedin.com/in/azhar-laher-877b844/?originalSubdomain=ca',
            imagelink: require("../assets/linkedin.svg"),
        },
         
    ]

    const bottomText = [
        "Success Stories of New Canadians", 
        "A blog of Canadian immigrant stories edited by Azhar Laher.", 
        "Website © 2020 Cheng Liang (William) H., Sameer K., Dubem O., Mitra M. and Henry Z.", 
    ]

    function footerDirectory() {
        return navigation.map((page) => {
            return(
                <span style={{display: 'flex', justifyContent: 'center'}} key={page.id + 'span'}>
                    <Button className={styleZ.navButton} href={page.relativelink} key={page.id}>
                        {page.text}
                    </Button>
                </span>
            )
        })
    }

    return (
        <footer>
            <div style={{backgroundColor: 'black', paddingTop: 30, paddingBottom: 30 }}>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Hidden mdUp>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src="/images/uploads/logo-icon-navbar.png" alt="logo" width="72px"/>
                        </div> 
                    </Hidden>
                    <div style={{display: 'flex', paddingBottom: 10, paddingRight: 20}}>
                        <Hidden smDown>
                            <img src="/images/uploads/logo-icon-navbar.png" alt="logo" width="72px"/>
                        </Hidden>
                        <h1 style={{color: 'white', alignSelf: 'center', textAlign: 'center'}}>
                            Success Stories of New Canadians
                        </h1>
                    </div>
                    <Hidden mdUp>
                        <Grid container direction="column">
                        <h4 style={{color: 'white', textAlign: 'center', paddingBottom: 10}}>
                            NAVIGATION
                        </h4>
                            {footerDirectory()}
                        </Grid> 
                    </Hidden>
                    <Hidden smDown>
                        <Grid container direction="row" style={{display: 'flex', justifyContent: 'center'}}>
                            <h4 style={{color: 'white', textAlign: 'center', alignSelf: 'center'}}>
                                NAVIGATION
                            </h4>
                                {footerDirectory()}
                        </Grid> 
                    </Hidden>
                    
                </Grid>
                <Grid item>
                    {
                        socialMedia.map((entry) => {
                            return(
                                <Button size='small' key={entry.alt}>
                                    <OutboundLink href={entry.outlink}>
                                        <img src={entry.imagelink} height='50px' alt={entry.alt} />
                                    </OutboundLink>
                                </Button>

                            ); 
                        })
                    }
                </Grid>
                <Grid item>
                    <p style={{color: 'white', textAlign: 'center'}}>
                        A blog of Canadian immigrant stories collected and edited by Azhar Laher.
                    </p>
                    <p style={{color: 'gray', textAlign: 'center'}}>
                        Website © 2020 Chengliang H., Sameer K., Dubem O., Mitravasu P. and Henry Z.
                    </p>
                </Grid>
            </Grid>
            </div>
        </footer>
    )
}


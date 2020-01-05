import React from 'react'
import { Button, Grid } from '@material-ui/core'
import '@styles/components/Footer.scss';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default function Footer() {
    const styleZ = {
        color: "white",
    }
    return (
        <footer>
            <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                <Grid item>
                    <Grid item xs={4}>
                        <Button style={styleZ} to="/#home">Home</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button style={styleZ} href="/selectionTest">Stories</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item>
                        <Button style={styleZ} href="/contact">Contact Us</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button size='small'>
                        <OutboundLink href="https://www.facebook.com/azhar.laher">
                            <img src={require('../assets/facebook.svg')} height='64px' alt='Facebook' />
                        </OutboundLink>
                    </Button>

                    <Button size='small'>
                        <OutboundLink href="https://www.instagram.com/azhar_laher/?hl=en">
                            <img src={require('../assets/instagram.svg')} height='64px' alt='Instagram' />
                        </OutboundLink>
                    </Button>
                    <Button size='small'>
                        <OutboundLink href="https://twitter.com/azharlaher?lang=en">
                            <img src={require('../assets/twitter.svg')} height='64px' alt='Twitter' />
                        </OutboundLink>
                    </Button>
                    <Button size='small'>
                        <OutboundLink href="https://www.linkedin.com/in/azhar-laher-877b844/?originalSubdomain=ca">
                            <img src={require('../assets/linkedin.svg')} height='64px' alt='LinkedIn' />
                        </OutboundLink>
                    </Button>
                </Grid>
            </Grid>
        </footer>
    )
}


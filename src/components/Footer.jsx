import React from 'react'
import { Box, Button, Grid } from '@material-ui/core'
import '@styles/components/Footer.scss';

export default function Footer() {
    return (
        <footer>
            <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                <Grid item>
                    <Grid item xs={5}>
                        <Button>Home</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button>Stories</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button>Subscribe</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button>Admin</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item>
                        <Button>Contact Us</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <div>
                        <Button href="https://www.facebook.com/">Link me to facebook</Button>
                    </div>
                </Grid>
            </Grid>
        </footer>
    )
}


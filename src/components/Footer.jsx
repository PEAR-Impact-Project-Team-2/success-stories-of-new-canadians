import React from 'react'
import { Button, Grid } from '@material-ui/core'
import '@styles/components/Footer.scss';

export default function Footer() {
    const styleZ={
        color: "white",
    }
    return (
        <footer>
            <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                <Grid item>
                    <Grid item xs={5}>
                        <Button style={styleZ}>Home</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button style={styleZ}>Stories</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button style={styleZ}>Subscribe</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button style={styleZ}>Admin</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item>
                        <Button style={styleZ}>Contact Us</Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <div>
                        <Button href="https://www.facebook.com/" style={styleZ}>Link me to facebook</Button>
                    </div>
                </Grid>
            </Grid>
        </footer>
    )
}


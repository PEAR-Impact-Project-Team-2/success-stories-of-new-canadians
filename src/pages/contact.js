import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { withSeo } from '../utils/withSeo';
import { Page } from '../layouts/Page';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import '@styles/pages/Contact.scss'

/** Get all markdown pages in ascending order */
/**
 * This is basically the code for the subscription popup, I just put it as a page just so its easier to see the thing.
 */

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: 'red',
    color: 'white',
    marginLeft: '5px',
    marginRight: '5px'
  },
  textfield: {
    flex: 7
  },
  popup: {
    display: 'flex',
  }
})); 

const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            image
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const ContactPage = () => {
  const { allMarkdownRemark } = useStaticQuery(query);
  const [subOpen, setSubOpen] = React.useState(false)
  const [thanksOpen, setThanksOpen] = React.useState(false)

  const openSubs = () => {
      setSubOpen(true);
  }

  const retrieveEmail = (e) => {
    console.log(e.target.value)
  }
  
  const closeSubs = () => {
      setSubOpen(false)
  }

  const openThanks = () => {
      closeSubs()
      setThanksOpen(true)
  }

  const closeThanks = () => {
      setThanksOpen(false)
  }

  console.log(allMarkdownRemark);

  const classes = useStyles();

  return (
    <Page className='contact'>
        <Button className={classes.button} onClick={ openSubs }>Subscribe</Button>
        <Dialog open={subOpen} onClose={closeSubs}>
            <DialogTitle id='sub_popup'>Subscription</DialogTitle>
            <DialogContent>
                <DialogContentText>Please enter your e-mail:</DialogContentText>
                <div className={classes.popup}>
                  <TextField className={classes.textfield} label='Email'></TextField>
                  <Button className={classes.button} onClick={openThanks}>Subscribe</Button>
                </div>
            </DialogContent>        
        </Dialog>
        <Dialog open={thanksOpen} onClose={closeThanks}>
            <DialogTitle>Subscribed</DialogTitle>
            <DialogContent>
                <DialogContentText>Thank you for subscribing! We hope you enjoy these stories!</DialogContentText>
                <Button onClick={closeThanks}>Close</Button>
            </DialogContent>
        </Dialog>
    </Page>
  );
};

export default withSeo(ContactPage, {
  title: 'Contact',
});

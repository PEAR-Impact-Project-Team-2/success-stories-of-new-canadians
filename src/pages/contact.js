import React from 'react';
import { graphql } from 'gatsby';
import { withSeo } from '../utils/withSeo';
import { Page } from '../layouts/Page';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Select, MenuItem} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '@components/Navbar';


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
    flex: 8,
    padding: '10px'
  },
  textfieldBox: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 350,
    maxWidth: 500,
    height: '100%',
    width: '100%'
  },
  popup: {
    display: 'flex',
  },
})); 

const ContactPage = () => {
  const [contactType, setContactType] = React.useState('Contact')
  const [subOpen, setSubOpen] = React.useState(false)
  const [thanksOpen, setThanksOpen] = React.useState(false)
  const [contactOpen, setContactOpen] = React.useState(false)
  const [showDropdown, setShowDropdown] = React.useState(false)
  const [contactPopOpen, setContactPopOpen] = React.useState(false)
  const [messageOpen, setMessageOpen] = React.useState(false)

  const openSubs = () => {
      setSubOpen(true);
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

  const openMessageSent = () => {
    closeContactPopup()
    setMessageOpen(true)
  }

  const closeMessageSent = () => {
    setMessageOpen(false)
  }

  const closeContactPopup = () => {
    setContactPopOpen(false);
  };

  const openContactPopup = () => {
    setContactPopOpen(true);
  };

  

  //console.log(allMarkdownRemark);



/*
  Contact Me form:
  - A drop down to choose from the two following options:
  - Contacting client to get their story featured or
  - To contact people featured on stories posted on the website
  - A field to input email address
  - Then upon submit, an email will be sent to client containing relevant
  message
*/

  const classes = useStyles();
  var Recaptcha = require('react-recaptcha');

  return (
    <Page className='contact'>
      <Navbar/>
      <div className='selectionTest__headerBox'>
        <h1 className='selectionTest__title'>Contact and Subscribe</h1> 
      </div>
      <div className='selectionTest__contactStyle'>
        <div /* subscribe button */>
          <Button className={classes.button} onClick={ openSubs }>Subscribe</Button>
          <Dialog open={subOpen} onClose={closeSubs}>
              <DialogTitle id='sub_popup'>Subscription</DialogTitle>
              <DialogContent>
                  <DialogContentText>Please enter your e-mail:</DialogContentText>
                  <div className={classes.popup}>
                    <TextField variant="outlined" className={classes.textfield}></TextField>
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
        </div>
        <div /* contact me form */>
          <Button className={classes.button} onClick={ openContactPopup }>Contact Me</Button>            
          <Dialog open={contactPopOpen} onClose={closeContactPopup}>
              <DialogTitle id='contact_popup'>{contactType}</DialogTitle>
              <DialogContent>
                <DialogContentText>Please enter your e-mail:</DialogContentText>
                  <div className={classes.popup}>
                    <div className={classes.textfieldBox}>
                    <TextField variant="outlined" className={classes.textfield}></TextField>
                    <DialogContentText>Message:</DialogContentText>
                    <TextField
                      multiline
                      rows="4"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    </div>
                    <Button className={classes.button} onClick={openMessageSent}>Send</Button>
                  </div>
              </DialogContent>        
          </Dialog>
          <Dialog open={messageOpen} onClose={closeMessageSent}>
              <DialogTitle>Message Sent</DialogTitle>
              <DialogContent>
                  <DialogContentText>Thank you for contacting us! We will contact you as soon as we can!</DialogContentText>
                  <Button onClick={closeMessageSent}>Close</Button>
              </DialogContent>
          </Dialog>
        </div>
      </div>
    </Page>
  );
};

export default withSeo(ContactPage, {
  title: 'Contact',
});
 
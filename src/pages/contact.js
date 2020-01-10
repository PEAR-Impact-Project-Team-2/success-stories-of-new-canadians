import React from 'react';
import { graphql } from 'gatsby';
import { withSeo } from '../utils/withSeo';
import { Page } from '../layouts/Page';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Select, MenuItem} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '@components/Navbar';
import ReCAPTCHA from "react-google-recaptcha";


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
    marginRight: '5px',
    marginTop: '5px',
    maxHeight: '50px',
    maxWidth: '150px'
  },
  textfield: {
    paddingTop: '10px',
    paddingBottom: '10px',
    maxHeight: 350,
    minWidth: 500,
    height: '100%',
    width: '100%'
  },
  textfieldBox: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 350,
    minWidth: 500,
    height: '100%',
    width: '100%'
  },
  popup: {
    display: 'flex',
    flexDirection: 'column',
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
  const [isVerified, setVerified] = React.useState(false)

  const openSubs = () => {
      setSubOpen(true);
  }

  const closeSubs = () => {
      setSubOpen(false)
  }  

  const openThanks = () => {
      closeSubs()
      if (isVerified) {
        setThanksOpen(true)
      } else {
        alert('Please verify that you are a human')
      }
  }

  const closeThanks = () => {
      setThanksOpen(false)
  }

  const openMessageSent = () => {
    closeContactPopup()
    if (isVerified) {
      setMessageOpen(true)
    } else {
      alert('Please verify that you are a human')
    }
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

  const captchaComplete = () => {
    setVerified(true);
  }

  

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
  
  return (
    <Page className='contact'>
      <Navbar page='contact'/>
      <div className='selectionTest__headerBox'>
        <h1 className='selectionTest__title'>Contact and Subscribe</h1> 
      </div>
      <div className='selectionTest__contactStyle'>
        <div className='selectionTest__subBox'>
          <h2>Subscription</h2>
          <div className={classes.popup}>
            <p>Please enter your e-mail:  </p>
            <div className={classes.textfieldBox}>
            <TextField variant="outlined" className={classes.textfield}></TextField>
            </div>
            <Button className={classes.button} onClick={openThanks}>Subscribe</Button>
      </div>
      <Dialog open={thanksOpen} onClose={closeThanks}>
          <DialogTitle>Subscribed</DialogTitle>
          <DialogContent>
              <DialogContentText>Thank you for subscribing! We hope you enjoy these stories!</DialogContentText>
              <Button onClick={closeThanks}>Close</Button>
          </DialogContent>
      </Dialog>
    </div>
    <div className='selectionTest__contactBox'>
      <h2>Contact Me</h2>          
      <p>Please enter your e-mail:</p>
        <div className={classes.textfieldBox}>
        <TextField variant="outlined" className={classes.textfield}></TextField>
        <p>Leave me a message here: </p>
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
      <Dialog open={messageOpen} onClose={closeMessageSent}>
          <DialogTitle>Message Sent</DialogTitle>
          <DialogContent>
              <DialogContentText>Thank you for contacting us! We will contact you as soon as we can!</DialogContentText>
              <Button onClick={closeMessageSent}>Close</Button>
          </DialogContent>
      </Dialog>
      <ReCAPTCHA
      sitekey="6Lcdmc0UAAAAAI8h_3WLw1HSiy2BqTL0ZQTi4pU5"
      onChange={captchaComplete}
    />
    </div>
    </Page>
  );
};

export default withSeo(ContactPage, {
  title: 'Contact',
});
 
// added the captcha to fend off bots
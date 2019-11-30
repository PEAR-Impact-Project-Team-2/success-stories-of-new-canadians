import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { withSeo } from '@utils';
import { Page } from '@layouts';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField} from '@material-ui/core'

/** Get all markdown pages in ascending order */
/**
 * This is basically the code for the subscription popup, I just put it as a page just so its easier to see the thing.
 */
const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            image {
              publicURL
            }
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const ContactPage = () => {
  const { allMarkdownRemark } = useStaticQuery(query);
  const [subOpen, setSubOpen] = React.useState(false)
  const [thanksOpen, setThanksOpen] = React.useState(false)

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

  console.log(allMarkdownRemark);

  return (
    <Page className='contact'>
        <Button onClick={ openSubs }>Subscribe</Button>
        <Dialog open={subOpen} onClose={closeSubs}>
            <DialogTitle id='sub_popup'>Subscription</DialogTitle>
            <DialogContent>
                <DialogContentText>Please enter your e-mail:</DialogContentText>
                <TextField label='Email'></TextField>
                <Button onClick={closeSubs}>Close</Button>
                <Button onClick={openThanks}>Subscribe</Button>
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

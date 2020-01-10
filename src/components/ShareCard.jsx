import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import '@styles/components/ShareCard.scss';

export const ShareCard = () => (
    <div className='card'>
        <Card>
            <CardContent className='cardContent'>

                <h2 className='header'>Share</h2>

                <div className='icon'>
                    
                        <div className='iconDiv'>
                            <IconButton> 
                                <img src={require('../assets/facebook.svg')} height='32px' alt='Facebook'/>
                            </IconButton>
                        </div>

                        <div className='iconDiv'>
                            <IconButton> 
                                <img src={require('../assets/instagram.svg')} height='32px' alt='Instagram' />
                            </IconButton>
                        </div>
                    
                        <div className='iconDiv'>
                            <IconButton> 
                                <img src={require('../assets/twitter.svg')} height='32px' alt='Twitter'/>
                            </IconButton>
                        </div>

                        <div className='iconDiv'>
                            <IconButton> 
                                <img src={require('../assets/linkedin.svg')} height='32px' alt='LinkedIn' />
                            </IconButton>
                        </div>
                    

                </div>
                
            </CardContent>
        </Card>

        <Card className='cardTell'>
            <CardContent>
                <h1 className='header'>Tell Your Story</h1>
                <p>Have an story you would like to tell? </p>
                <p>We are always looking to tell the unique stories of Canadian immigrants</p>
            </CardContent>
            <CardActions>
                <Button size="small" href="/contact">Contact Us</Button>
            </CardActions>
        </Card>

    </div>
)
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import '@styles/components/ShareCard.scss';

export const ShareCard = () => (
    <div>
        <Card className='card'>
            <CardContent className='cardContent'>

                <h1 className='header'>Share</h1>

                <div className='icon'>
                    <div>
                        <div>
                            <IconButton> 
                                <img src={require('../assets/facebook.svg')} height='64px'/>
                            </IconButton>
                        </div>

                        <div>
                            <IconButton> 
                                <img src={require('../assets/instagram.svg')} height='64px' />
                            </IconButton>
                        </div>
                    </div>

                    <div>
                        <div>
                            <IconButton> 
                                <img src={require('../assets/twitter.svg')} height='64px'/>
                            </IconButton>
                        </div>

                        <div>
                            <IconButton> 
                                <img src={require('../assets/linkedin.svg')} height='64px' />
                            </IconButton>
                        </div>
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
                <Button size="small">Contact Us</Button>
            </CardActions>
        </Card>
    </div>
)
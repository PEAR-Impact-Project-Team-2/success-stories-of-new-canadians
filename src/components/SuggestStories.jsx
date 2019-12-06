import React from 'react';
import { Button } from '@components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import '@styles/components/SuggestStories.scss';

            {/* REFERENCE CODE
            <Button 
                to={edges[order - 1].node.fields.slug}
                className='blog__button'
                disabled={!order}
            >
                Prev Page - {edges[order - 1].node.frontmatter.title}
            </Button> */}

export const SuggestStories = ({ order, edges }) => (
    <div>
        <h3>Suggested Reading:</h3>
        {Boolean(order) ? (
        
        <Card onClick={()=>window.open(`${edges[order - 1].node.fields.slug}`, "_self")} className='suggestCard'>
            <CardActionArea
                to={edges[order - 1].node.fields.slug}
            >
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={ edges[order-1].node.frontmatter.image.publicURL }
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { edges[order-1].node.frontmatter.title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { edges[order-1].node.frontmatter.description }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        ) : (
            <Card onClick={()=>window.open(`${edges[order + 2].node.fields.slug}`, "_self")} className='suggestCard'>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={ edges[order+2].node.frontmatter.image.publicURL }
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { edges[order+2].node.frontmatter.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { edges[order+2].node.frontmatter.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )}


        {order !== edges.length - 1 ? (
        
            <Card onClick={()=>window.open(`${edges[order + 1].node.fields.slug}`, "_self")} className='suggestCard'>
                <CardActionArea
                    to={edges[order + 1].node.fields.slug}
                >
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={ edges[order+1].node.frontmatter.image.publicURL }
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { edges[order+1].node.frontmatter.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { edges[order+1].node.frontmatter.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        ) : (

            <Card onClick={()=>window.open(`${edges[order - 2].node.fields.slug}`, "_self")} className='suggestCard'>
                <CardActionArea
                    to={edges[order - 2].node.fields.slug}
                >
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={ edges[order-2].node.frontmatter.image.publicURL }
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { edges[order-2].node.frontmatter.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { edges[order-2].node.frontmatter.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        )}
    </div>
);

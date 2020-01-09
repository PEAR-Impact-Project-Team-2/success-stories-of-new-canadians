import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '@styles/components/SuggestStories.scss';

export const SuggestStories = ({ order, edges }) => (
    <div>
    <h3>Recent Stories:</h3>
    <div className='suggestContainer'>

        <Card onClick={()=>window.open(`${edges[edges.length-1].node.fields.slug}`, "_self")} className='suggestCard'>
            <CardActionArea
                to={edges[edges.length-1].node.fields.slug}
            >
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={ edges[edges.length-1].node.frontmatter.image }
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { edges[edges.length-1].node.frontmatter.title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { edges[edges.length-1].node.frontmatter.description }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card onClick={()=>window.open(`${edges[edges.length-2].node.fields.slug}`, "_self")} className='suggestCard'>
            <CardActionArea
                to={edges[edges.length-2].node.fields.slug}
            >
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={ edges[edges.length-2].node.frontmatter.image }
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { edges[edges.length-2].node.frontmatter.title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { edges[edges.length-2].node.frontmatter.description }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        </div>
    </div>
    
);

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '@styles/components/SuggestStories.scss';

export const SuggestStories = ({ order, edges }) => (
    <div>
        <h3>Suggested Reading:</h3>

        <Card onClick={()=>window.open(`${edges[0].node.fields.slug}`, "_self")} className='suggestCard'>
            <CardActionArea
                to={edges[0].node.fields.slug}
            >
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={ edges[0].node.frontmatter.image.publicURL }
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { edges[0].node.frontmatter.title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { edges[0].node.frontmatter.description }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card onClick={()=>window.open(`${edges[1].node.fields.slug}`, "_self")} className='suggestCard'>
            <CardActionArea
                to={edges[1].node.fields.slug}
            >
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={ edges[1].node.frontmatter.image.publicURL }
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { edges[1].node.frontmatter.title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { edges[1].node.frontmatter.description }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>


        {/*
        
        Boolean(order>1) ? (
        
        <Card onClick={()=>window.open(`${edges[order - 2].node.fields.slug}`, "_self")} className='suggestCard'>
            <CardActionArea
                to={edges[order - 2].node.fields.slug}
            >
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={ edges[order - 2].node.frontmatter.image.publicURL }
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { edges[order - 2].node.frontmatter.title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { edges[order - 2].node.frontmatter.description }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        ) : (
            <Card onClick={()=>window.open(`${edges[order + 1].node.fields.slug}`, "_self")} className='suggestCard'>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={ edges[order + 1].node.frontmatter.image.publicURL }
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { edges[order + 1].node.frontmatter.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { edges[order + 1].node.frontmatter.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )}


        {order !== edges.length ? (
        
            <Card onClick={()=>window.open(`${edges[order].node.fields.slug}`, "_self")} className='suggestCard'>
                <CardActionArea
                    to={edges[order].node.fields.slug}
                >
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={ edges[order].node.frontmatter.image.publicURL }
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { edges[order].node.frontmatter.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { edges[order].node.frontmatter.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        ) : (

            <Card onClick={()=>window.open(`${edges[order - 3].node.fields.slug}`, "_self")} className='suggestCard'>
                <CardActionArea
                    to={edges[order - 3].node.fields.slug}
                >
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={ edges[order - 3].node.frontmatter.image.publicURL }
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { edges[order - 3].node.frontmatter.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { edges[order - 3].node.frontmatter.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        ) */}
    </div>
);

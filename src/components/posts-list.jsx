import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        display:'flex',
        border: '1px solid grey',
        maxWidth: '500px',
        padding: '7px',
        marginBottom: '2rem'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 400,

        '@media (max-width:600px)': {
            width: 200,
        },
    },
}));

const PostsList = (props) => {
    const { title, upVotes, date, url, image } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={image}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Upvotes:{upVotes}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Date: {date}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            <a href={url}>Read Here</a>
                        </Typography>
                    </CardContent>

                </div>

            </Card>
        </div>

    );
}

export default PostsList;
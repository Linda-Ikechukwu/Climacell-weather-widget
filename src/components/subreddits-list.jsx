import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CategoryIcon from '@material-ui/icons/Category';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root:{
      '& div':{
          
          '& svg': {
              color: 'rgb(90, 182, 205)',
              fontSize:'2rem',
          },
          '& span':{
            fontSize:'2rem', 
            fontfamily: 'Raleway !important',
          }
      }
    }
}));


const ListItemLink = (props) => {
    return <ListItem button component={Link} {...props}  />;
}

const SubredditList = (props) => {
    const { lists } = props;
    const classes = useStyles();

    return (
        <Fragment>
            <List>
                {
                    lists.map((list, index) => {
                        const subreddit = list.data.subreddit;
                        return (
                            <Fragment>
                                <ListItemLink  className={classes.root} button key={index} to={`/subreddits/${subreddit}`}>
                                    <ListItemIcon>
                                        <CategoryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={subreddit} />

                                </ListItemLink>
                                <Divider />
                            </Fragment>
                        )
                    })
                }
                <Divider />
            </List>
        </Fragment>




    );
}

export default SubredditList
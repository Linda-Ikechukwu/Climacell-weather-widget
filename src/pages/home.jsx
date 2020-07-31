import React from 'react';
import axios from 'axios'
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import SubredditList from '../components/subreddits-list';


const useStyles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100vw',
        minHeight:'100vh',
    },
    paper: {
        width: '80%',
        minHeight: '100vh',

        '& h1': {
            textAlign: 'center',
        }
    },
    loader:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    }
});



class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            isLoading: false,
            error: null,
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });

        try {
            const response = await axios.get('https://www.reddit.com/.json');
            const result = response.data.data.children;
            localStorage.setItem('data', JSON.stringify(result))
            this.setState({ result: result, isLoading:false })
        }catch (error){
            this.setState({error:error, isLoading:false })
        }
    }

    render() {
        const {result, isLoading, error} = this.state;

        if(error){
            return (
                <div  className="root">
                   <p>Something went wrong</p>
                </div>
            )
           
        }

        if(isLoading){
            return (
                <div className="root">
                    <Paper  className="paper">
                       <h1>My Reddit Clone</h1>
                       <CircularProgress  className="loader"/>
                    </Paper>
                   
                </div>
            )
        }

        return (
            <div  className="root">
                <Paper  className="paper">
                    <h1>My Reddit Clone</h1>
                    <SubredditList lists={result}></SubredditList>
                </Paper>

            </div>
        )
    }
}

export default withStyles(useStyles)(HomePage);
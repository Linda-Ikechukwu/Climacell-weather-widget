import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import PostsList from '../components/posts-list';
import SearchAppBar from '../components/searchbar';
import Switch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            descending: true,
            pageTitle: '',
            posts: [],
            value: '',
            searchResult: [],
            isLoading: false
        };
    }

    componentDidMount() {
        let posts;
        this.setState({ isLoading: true });
        posts = this.props.subReddits !== undefined ? this.props.subReddits : JSON.parse(localStorage.getItem('data'));

        const query = (this.props.location.pathname).split('/')[2];
        const filteredPosts = posts.filter(post => post.data.subreddit === query);

        this.setState({ pageTitle: query, posts: filteredPosts, isLoading: false })
    }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({ ...this.state, value: value });
        const search = this.state.value;
        const searchPosts = this.state.posts.filter(post => post.data.title.includes(search));
        this.setState({ searchResult: searchPosts, isLoading: false });
    }

    // handleClickBtn = () => {
    //     this.setState({ isLoading: true });
    //     const search = this.state.value;
    //     const searchPosts = this.state.posts.filter(post => post.data.title.includes(search));
    //     this.setState({ searchResult: searchPosts, isLoading: false });
    //     console.log(search, searchPosts, this.state.posts)
    // }

    render() {
        const { posts, isLoading, value, searchResult } = this.state;
        const missingImage = 'https://res.cloudinary.com/lindadxk/image/upload/v1596178797/missing_jzumgq.jpg';


        if (isLoading) {
            return (
                <div className="root">
                    <Paper className="paper">
                        <h1>Posts on {this.state.pageTitle}</h1>
                        <CircularProgress className="loader" />
                    </Paper>

                </div>
            )
        }

        return (
            <div className="root">
                <Paper className="paper">
                    <h1>Posts on {this.state.pageTitle}</h1>
                    <div className="flex">
                        <SearchAppBar
                            value={value}
                            handleInputChange={this.handleInputChange}
                            handleClickBtn={this.handleClickBtn}
                        />
                        <div>
                            Most Upvotes
                            <Switch

                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            Least Upvotes
                        </div>
                    </div>

                    {
                        searchResult.length !== 0 ? (
                            searchResult.map((post, index) => {
                                return posts.length ? (
                                    <PostsList
                                        key={index}
                                        title={post.data.title}
                                        upVotes={post.data.ups}
                                        date={post.data.created}
                                        url={post.data.url}
                                        image={(post.data.thumbnail.startsWith('https'))
                                            ? post.data.thumbnail :
                                            missingImage
                                        }
                                    />) : <p>There was no result for your search</p>
                            })
                        ) :
                            posts.length ? posts.map((post, index) => {
                                return (
                                    <PostsList
                                        key={index}
                                        title={post.data.title}
                                        upVotes={post.data.ups}
                                        date={post.data.created}
                                        url={post.data.url}
                                        image={(post.data.thumbnail.startsWith('https'))
                                            ? post.data.thumbnail :
                                            missingImage
                                        }
                                    />
                                )
                            }) : <p>There was no result for your search</p>
                    }

                </Paper>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    subReddits: state.subReddits.subReddits,
    posts: state.posts.posts,
});


export default connect(mapStateToProps, null)(PostsPage);
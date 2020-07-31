import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Postspage from './pages/posts';
import './App.css';

function App() {
  return (
    <div>
       <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path ='/subreddits/:subreddit' component={Postspage} />
       </Switch>
    </div>
  );
}

export default App;

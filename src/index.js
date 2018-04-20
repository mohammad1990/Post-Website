import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import PostsIndex from './components/posts'
import reducers from './reducers';
import promise from 'redux-promise';
import PostNew from './components/post_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
       <Route path="/posts/new" component={PostNew}/>
       <Route path="/" component={PostsIndex}/>
    </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

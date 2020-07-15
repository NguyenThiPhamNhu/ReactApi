import React, { Component } from 'react';
import './App.css';
// import nhung class moi trong thu vien
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
  
} from "react-router-dom";

//import cac file kia
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Post from './components/Post';


class App extends React.Component {
  render() {
    return (
      <Router>

        
        
        <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
        <script src="//code.jquery.com/jquery.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

        
        <div class="navbar">
          <a class="navbar-brand" href="/home">Home</a>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/posts">Posts</a>
            </li>
            
          </ul>
        </div>
        
        
       {/* cach 2 */}
        {/* <ul>
          <li><Link to ="/home">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/post">Post</Link></li>
          <li><Link to ="/Posts">Posts</Link></li>
        </ul> */}
        {/* vidu: co exact trong home thi go chi cung ra trang home k ra trang khac */}
        <Switch>
              <Route path="/home" exact>  
                  <Home />
              </Route>

              <Route path="/about">
                  <About />
              </Route>

              <Route path="/posts" exact>
                  <Posts />
              </Route>

              <Route path={"/posts/:id"}>
                  <Post />
              </Route>
              
              
              
        </Switch>
        
      </Router>
    )
  }
}


export default App;

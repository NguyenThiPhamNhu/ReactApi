
import React, { Component } from 'react';

import {
    Link
} from "react-router-dom";

class Posts extends Component {
    constructor() {
        super();
        this.state ={
            posts: []
        }
        this.getData();
    }
    getData() {
        fetch("http://127.0.0.1:8000/api/posts")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateUI(data);
                });
            });
    }
    updateUI(data) {
        this.setState({
            posts: data
        })
    }
    render() {
        return (
            <div>
               <center><h1>Posts</h1></center> 
                {this.state.posts.map((item) =>
                    <div>
                        
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div class="thumbnail">
                                <img src="https://i.imgur.com/L5h9KfK.jpg" alt="" />
                                <div class="caption">
                                    <h1>{item.title}</h1>
                                    <p>
                                    <h2>{item.id}</h2>
                                    <h2>{item.comment}</h2>
                                    {/* <h1>Title:{this.state.posts.title}</h1>
                                     <h1>Comment:{this.state.posts.comment}</h1> */}
                                    </p>
                                    <p>
                                    {/* <Link to={"/posts/" + item.id}>Detail</Link> */}
                                    <a class="btn btn-danger" href={"/posts/" + item.id} role="button">Detail</a>
                                    <a class="btn btn-success" href={"/posts/" + item.id} role="button">Add</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* <h2>{item.id}</h2>
                        <h2>{item.title}</h2>
                        <Link to={"/posts/" + item.id}>Detail</Link>
                        <hr /> */}
                    </div>
                    
                )}

            </div>
        )
    }
}
export default Posts;
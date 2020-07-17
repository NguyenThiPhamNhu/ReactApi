
import React, { Component } from 'react';

import {
    Link
} from "react-router-dom";

class Admin extends Component {
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
                    
                    <table  class="table table-hover">
                       
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Comment</th>
                                <th>Add</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td><img width="150px" src="https://i.imgur.com/L5h9KfK.jpg" alt="" /></td>
                                <td>{item.comment}</td>
                                <td>
                                <button type="button" class="btn btn-primary disabled">Add</button>
                                </td>
                                <td>
                                <button type="button" class="btn btn-info disabled">Edit</button>
                                </td>
                                <td>
                                <button type="button" class="btn btn-danger disabled">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    
                )}

            </div>
        )
    }
}
export default Admin;
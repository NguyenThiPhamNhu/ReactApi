
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Post extends Component {
    render() {
        let id = this.props.match.params.id;

        return (
            <div>
                <h1>Detail for post</h1>
                <h1></h1>
                <h1>Id:{id}</h1>


            </div>
        )
    }
}
export default withRouter(Post);
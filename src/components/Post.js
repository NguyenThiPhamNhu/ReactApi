import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
class Post extends Component{
    constructor(props) {
        super(props);
        this.state ={
            post:[]
        }
        let id=this.props.match.params.id;
        this.getData(id);
      }
      getData(id){
          fetch("http://127.0.0.1:8000/api/posts/"+id)
          .then(response=>{
              response.json().then((data)=>{
                  console.log(data);
                  this.updateIU(data);
              })
          })
      }
      updateIU(data){
          this.setState({
              post:data
          })
      }
    render(){
        return(
            <div>
               <center><h1>Posts</h1></center> 
                {this.state.post.map((item) =>
                    <div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div class="thumbnail">
                                <img src="https://i.imgur.com/L5h9KfK.jpg" alt="" />
                                <div class="caption">
                                    <h1>Name:{item.Title}</h1>
                                    <p>
                                    <h2>Id:{item.id}</h2>
                                    <h2>Comment:{item.comment}</h2>
                                    </p>
                                    <p>
                                    <a class="btn btn-success" href="" role="button">Buy</a>
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
  export default withRouter(Post) ;
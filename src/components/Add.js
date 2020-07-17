import React, {Component} from 'react';
import Post from './Post';

class Add extends Component{
  onAddSubmit(event){
    event.preventDefault();
    let title = event.target['title'];
    let comment = event.target['comment'];

    // let title = event.target['title'].value;
    // let comment = event.target['comment'].value;

    let post = {
      title: title,
      comment: comment
    }
    let postInJson = JSON.stringify(post);

    console.log(postInJson);
    fetch ("http://127.0.0.1:8000/api/posts", {
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:postInJson
    })
    .then((response)=>{
      console.log(response);
    });
    


  }
    render(){
        return(
          <div>
          
            <h2>ADD VITEM PRO </h2>
            
            <form onClick={this.onAddSubmit} method="POST" class="form-inline" role="form">
                <div class="form-group">
                    <label>Title</label>
                    <p>
                    <input type="text" class="form-control"  name="title" id="" placeholder="Input title" />
                    </p>
                    <label>Comment</label>
                    <p>
                    <input type="text" name ="comment" class="form-control" id="" placeholder="Input coment" />
                    </p>
                    <p>
                    <button type="button"  class="btn btn-info">Add</button>
                    </p>
                </div>
                
                
                

               
            </form>
            
            
          </div>
          
        )
      }
    }
export default Add;
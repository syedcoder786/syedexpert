import React, { Component } from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
// import {AddPost} from '../actions/postActions';
class PostForm extends Component {
    constructor(){
        super();
        this.state={
            post_id:'',
            email:'',
            password:'',
            selling_rate:''
        }
    }

    
    onChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
  onSubmit=(e)=>{
    e.preventDefault();
    axios({
        method: 'post',
        url: '/api/addaccount',
        data: this.state,
        }).then(item =>
            console.log(item.data)
          );
      // .then(
      //   this.props.posts.unshift({title:this.props.newpost})
      // )
      // if(this.props.posts!=={}){
      //   this.props.posts.unshift(this.props.newpost)
      // } 
    this.setState({post_id:'',
    email:'',
    password:'',
    selling_rate:''})
    // setTimeout(()=>{console.log(this.props.newpost.title)},4000)
  }

  render() {

    return (
      <div>
        
        <form method="POST" onSubmit={this.onSubmit}>
            <input 
                type="text" 
                name="post_id" 
                placeholder="post_id"
                value={this.state.post_id}
                onChange={this.onChange}>
            </input><br/>
            <input 
                type="email" 
                name="email" 
                placeholder="email"
                value={this.state.email}
                onChange={this.onChange}>
            </input><br/>
            <input 
                type="password" 
                name="password" 
                placeholder="password"
                value={this.state.password}
                onChange={this.onChange}>
            </input><br/>
            <input 
                type="selling_rate" 
                name="selling_rate" 
                placeholder="selling_rate"
                value={this.state.selling_rate}
                onChange={this.onChange}>
            </input><br/>
            <input 
                type="submit" 
                placeholder="submit">
            </input>
        </form>
        {/* <h1>{this.props.newpost ? this.props.newpost.title :'' }</h1> */}

      </div>
    )
  }
  
}
// const mapStateToProps=state=>({
// //   posts:state.post.items,
// //   newpost:state.post.item
// });

export default PostForm;
// export default connect(mapStateToProps, { AddPost })(PostForm);


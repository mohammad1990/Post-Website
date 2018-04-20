import React,{Component} from 'react';
import {connect}from 'react-redux'
import {fetchPosts} from '../actions';
import {Link}  from 'react-router-dom';
import _ from 'lodash'

class PostsIndex extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderPosts()
  {
    console.log("Count me Out");
    console.log(this.props.posts.length)
    return _.map(this.props.posts, post=> {
          console.log("Count me");
       return( <li className="list-group-item" key={post.id}>{post.title}</li>)
      });

  }
  render()
  {
    console.log(this.props.posts);

    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add Post</Link></div>
        <h3>Posts</h3>
      <ul className="list-group">
         {this.renderPosts()}
      </ul>
    </div>
    );
  }
}
function mapStateToProps(state)
{
  console.log("mapStateToProps@");
   console.log(state.posts.title);
  return{posts: state.posts}
}
export default connect(mapStateToProps,{fetchPosts})(PostsIndex)

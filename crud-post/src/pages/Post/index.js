import React, {Component} from 'react';





class Post extends Component {
  
  render(){
  const {title} = this.props.match.params;
  return(<div>{title}</div>)
  }
}





export default Post;
import React from 'react';
import { Link } from "react-router-dom";




const Post = (props) =>{
  return(
    <div>
      <h1>{props.title}</h1>
    <span>{props.body}</span>
    <button onClick={props.edit}>Editar</button>
    <button onClick={props.remove}>Exluir</button>
    <Link to={`/posts/${props.title}`}>Clique aqui</Link>
    </div>
  )

}



export default Post;
import React from 'react';




const Post = (props) =>{
  return(
    <div>
      <h1>{props.title}</h1>
    <span>{props.body}</span>
    <button onClick={props.edit}>Editar</button>
    <button onClick={props.remove}>Exluir</button>
    </div>
  )

}



export default Post;
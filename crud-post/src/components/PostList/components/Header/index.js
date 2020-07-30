import React from 'react';



const Header = (props) => {
 return(
   <header>
     <button onClick={props.onClick}>Criar Post</button>
     
   </header>
 )
}




export default Header;
import React from 'react';
import './styles.css'
import { useAuth } from '../../contexts/auth';




const Dashboard:React.FC = () => {
  const {signOut, user} = useAuth();

  function handleSignOut(){
    signOut();

  }

  return (
    <div className="dash-container">
       <img src={user?.avatar} alt="user"/>
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  
    )
}



export default Dashboard;
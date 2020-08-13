import React from 'react';
import './styles.css'
import { useAuth } from '../../contexts/auth';
import Header from '../../components/Header/index';
import Button from '../../components/Button';




const Dashboard:React.FC = () => {
  const {signOut, user} = useAuth();

  function handleSignOut(){
    signOut();

  }

  return (
    <>
    <Header>
      <h1>Bem vindo {user?.name}</h1>
      <div className="row">
      <Button name="Sair" onClick={handleSignOut}/>
      </div>
      

      </Header>
    <div className="dash-container">
      <div className="container">
      <img src={user?.avatar} alt="user"/>
      <h2>Nome: {user?.name}</h2>
      </div>
      
    </div>
  </>
    )
}



export default Dashboard;
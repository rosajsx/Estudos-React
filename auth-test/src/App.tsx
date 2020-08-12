import React from 'react';
import './styles/global.css';
import Routes from './routes/index';
import {AuthProvider} from './contexts/auth';


//AuthContext.Provider - Por que eu quero prover algum tipo de informação para todas as rotas e componentes da minha aplicação!

const App:React.FC = ()=> {

  

  return (
  <AuthProvider>
     <Routes/>
  </AuthProvider>
  )
    
  
}

export default App;

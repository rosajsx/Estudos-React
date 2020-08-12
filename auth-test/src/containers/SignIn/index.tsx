import React, { useState, FormEvent } from "react";
import "./styles.css";

//Serviço fake de autenticação que foi criado em services
// useContext - Hook do React para ler informações de um contexto
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import Header from "../../components/Header/index";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");

  function handleSignIn(e: FormEvent) {
    // pegar email e password do usuario - ideal
    e.preventDefault();

    const userData = {
      name,
      senha,
    };

    signIn(userData);
  }
  //

  return (
    <div className="sign-container">
      <Header>
        <Link to="/register">Cadastre-se</Link>
      </Header>

      <main>
        <form>
          <Input
            label="Nome"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Senha"
            name="senha"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
          <Button name="Entrar" onClick={handleSignIn} />
        </form>
      </main>
    </div>
  );
};

export default SignIn;

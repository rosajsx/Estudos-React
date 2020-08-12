import React, { FormEvent, useState } from "react";
import "./styles.css";
import { useHistory, Link } from "react-router-dom";
import { signUp } from "../../services/auth";
import Header from "../../components/Header";
import Input from "../../components/Input/index";
import Button from "../../components/Button";

const SignUp: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [avatar, setAvatar] = useState("");

  async function handleCreateUser(e: FormEvent) {
    e.preventDefault();

    if (name === "" || senha === "") {
      return alert("Por favor, preencha todos os campos!");
    }

    let user = {
      token: "asda54sa8d4as1511das5d1as",
      user: {
        avatar,
        name,
        senha,
      },
    };

    signUp(user);
    history.push("/");
  }

  return (
    <div className="signOut-container">
      <Header>
        <h1>Cadastro</h1>
        <Link to="/">Voltar</Link>
      </Header>

      <main>
        <form onSubmit={handleCreateUser}>
          <Input
            placeholder="Digite seu nome"
            label="Nome"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="Digite sua senha"
            label="Senha"
            name="senha"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
          <Input
            placeholder="Coloque o link de alguma foto sua"
            label="Perfil"
            name="perfil"
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
          />
          <Button name="Cadastrar" />
        </form>
      </main>
    </div>
  );
};

export default SignUp;

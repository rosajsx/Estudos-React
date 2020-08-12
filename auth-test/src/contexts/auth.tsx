import React, { createContext, useState, useEffect, useContext } from "react";
import * as auth from "../services/auth";
import {
  setData,
  removeData,
  storagedUserAndTokenData,
} from "../utils/functions";

//Formato do contexto
interface AuthContextData {
  signed: boolean;
  user: auth.userData | null;
  loading: boolean;
  signIn(user: object): Promise<void>;
  signOut(): void;
}

//Criando contexto e indicando valor inicial/formato
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//Forma para controlar o estado do valor do context
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<auth.userData | null>(null);
  const [loading, setLoading] = useState(false);

  //Disparar uma verificação ao renderizar a tela para ver se existe algum usuário logado
  useEffect(() => {
    function loadStorageData() {
      const storagedUser = storagedUserAndTokenData("user");
      const storagedToken = storagedUserAndTokenData("token");

      if (storagedUser && storagedToken) {
        /*Caso o usuário já esteja logado na aplicação, utilizar esta tag ao carregar a pag
        e utilizando o token gravado no localStorage
        api.defaults.headers['Authorization'] = `Beader${storagedToken}`;
        */
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  }, []);

  //Função para cadastrar e tirar a responsabilidade do componente de lidar com autenticação!
  async function signIn(user: auth.userData) {
    setLoading(true);
    const response = await auth.signIn(user);

    /*Exemplo de enviar token para o Backend com o axios
     api.defaults.headers['Authorization'] = `Beader${response.token}`;
   
     A partir do momento em que o usuário fazer um login, toda e qualquer requisião
     subsequente ao backend enviará um Header chamado authorization com o Beader
   
   */
    const correctResponse = response ? response.user : null;
    if (correctResponse == null) {
      setLoading(false);
      return;
    }

    setLoading(false);
    setUser(response.user);

    setData("@RNAuth:user", JSON.stringify(response.user));
    setData("@RNAuth:token", response.token);
  }

  function signOut() {
    setUser(null);
    removeData("@RNAuth:user", "@RNAuth:token");
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//Hook do useContext
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

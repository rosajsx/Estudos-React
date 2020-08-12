import {
  storageData,
  setData,
  verifyUsers,
  parseReturnData,
} from "../utils/functions";
// serviço fake para fazer sem API!

//Formato de resposta do SignIn
export interface Response {
  token: string;
  user: {
    name: string;
    senha: string;
    avatar?: string;
  };
}

export interface userData {
  avatar?: string;
  name: string;
  senha: string;
}

export function signIn(user: userData): Promise<Response> {
  let userData = returnUserData(user);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 2000);
  });
}

//Função de cadastro na aplicação
export async function signUp(user: Response) {
  let userData = storageData("Data");
  if (userData === null) userData = [];
  let verify = verifyUsers(userData, user);

  if (verify) return alert("Cadastro existente!");

  userData.push(user);
  setData("Data", JSON.stringify(userData));
}

function returnUserData(user: userData) {
  let data = storageData("Data");

  if (data === null) alert("Nenhum usuario cadastrado no sistema");

  const response = parseReturnData(data, user);

  return response;
}

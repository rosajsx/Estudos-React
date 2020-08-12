import {Response, userData} from '.././services/auth'


//Busca e retorna os dados no local storage
export function storageData(item:string){
  let data = localStorage.getItem(item);
  let parsedData = data ? JSON.parse(data) : null;

  return parsedData;
}

//Retorna data dos do usuário ou token previamente guardado na aplicação!
export function storagedUserAndTokenData(name:string){
  let data = localStorage.getItem(`@RNAuth:${name}`)

  return data;
}

//Gravar dados no localStorage
export function setData(item:string, userData:string){

  localStorage.setItem(item, userData)

}

//Remove itens do local storage pela quantidade de argumentos
export function removeData(...args: any[string]){

  for(let item of args){
    localStorage.removeItem(item);
  }

}


//Verificação se já existe um usuario identico
export  function verifyUsers(data:Array<Response>, user:Response){
  let trueOrFalse = false;
  let name = user.user.name;
  let senha = user.user.senha;

   for(let response of data){
    
  
     if (name === response.user.name && senha === response.user.senha) {
      trueOrFalse = true;
    } 

  }

  return trueOrFalse;
}

//tratar e retornar os dados do user
export function parseReturnData(data:Array<Response>, user:userData){
  const response =  data
  .filter((userData: Response) => {
    //console.log(userData.user)
    if (
      userData.user.name === user.name &&
      userData.user.senha === user.senha
    ) {
      return userData;
    }
  })
  .shift();

  return response;
}
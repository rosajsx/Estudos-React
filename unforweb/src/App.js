import React, {useRef, useEffect} from 'react';
import {Form} from '@unform/web';
import {Scope} from '@unform/core'
//Yup para validação!
import * as Yup from 'yup'
import './App.css';
import Input from './components/Form/input';





function App() {

  //Utilizando referência para controlar o formulário externamente
  const formRef = useRef(null);

  
  /*O FORM possui uma prop chamada initalData, que são as props que
  devem ser inicializadas com os inputs... 
  É possivel setar dentro do componente pela prop defaultValue e
  indicando o mesmo na prop defaultValue do input, assim inicializa com 
  os dados!
  */
  
  /*
  Além da data, recebe uma função chamada reset, 
  como o nome já diz...
  Ela reseta os dados do formulário quando chamada,
  neste caso, assim q o submit for realizado!
  */

  async function handleSubmit(data, {reset}){

    try{

    /*Definindo formato dos dados e suas mensagens de error*/ 
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      email: Yup.string().email('Digite um email válido').required('O email é obrigatório'),
      adress: Yup.object().shape({
        city: Yup.string().min(3, 'No mínimo 3 caracteres').required('A cidade é obrigatória')
      })
    });

    await schema.validate(data, {abortEarly: false,})

    /*
      Por padrão o yup ao encontrar um erro
      já mostra a mensagem de erro e nem valida o restante,
      por isto é necessário a prop abaixo e por padrão vem como
      true
      */

    console.log(data);
    formRef.current.setErrors({});

    reset();

  } catch(err){
     if(err instanceof Yup.ValidationError){
       const errorMessages = {};

       err.inner.forEach(error => {
         errorMessages[error.path] = error.message;
       })

       //Setando mensagens de error em seus com seus devidos campos
       formRef.current.setErrors(errorMessages);
     }
  }

  
      //Recebe o nome do campo e a mensagem que deve ser mostrada
      //formRef.current.setFieldError('name', 'O nome é obrigatório')


      //Setar errors em mais de um campo
      /* 
      formRef.current.setErrors({
        name: 'O nome é obrigatório',
        adress: {
          city: 'A cidade é obrigatória'
        }
      }) */

       /*console.log(formRef.current) - Retorna um objeto com varias funções
     para controle do form*/
      
    }

   
   //Simulando caso precise puxar dados de uma api
   /*
   Não utiliza o initialData neste caso, só o utiliza quando os dados estão 
   disponiveis de forma estática
   */
   useEffect(()=>{
     setTimeout(()=>{
       //Preenchendo valores dentro do input
       formRef.current.setData({
         name: 'Lucas',
         email: 'lucassantosrosa51@gmail.com',
         adress: {
           city: 'Santo Amaro'
         }
       })

     }, 2000)
   }, [])

     
  
  return (
    <div className="App">
      {/*initialData={initialData} - Caso queira iniciar com valores*/ }
      <Form ref={formRef}  onSubmit={handleSubmit}>
        <Input type="text" name="name"/>
        <Input  name="email"/>

       
        {/* 
        Ao colocar  o nome do campo. uma props desse campo,
        ele retornará um objeto com todas as props.
        Utilizando o component Scope vindo do @unform/core,
        evita a repetição do nome do campo utilizando sua
        prop path, ou seja ele se torna o objeto e tudo dentro
        de seu escopo são suas propriedades.

        */ }
        <Scope path="adress">
        <Input name="street"/>
        <Input name="city"/>
        <Input name="neighborhood"/>
        <Input name="number"/>
        </Scope>
         
        <button type="submit">Enviar</button>

      </Form>
    </div>
  );
}

export default App;

import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core'
 

export default function Input({name, ...rest}){
  //Utilizando hook para pegar a referência na DOM
  const inputRef= useRef(null);
  const {fieldName, registerField, defaultValue, error} = useField(name);

   
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })


  }, [fieldName, registerField]);

  return (
    <div>
    {/*Ref quer dizer a referência do componente na DOM, como se fosse uma assinatura*/ }
    <input ref={inputRef} defaultValue={defaultValue} {...rest} />

    {/*Renderização condicional caso o error esteja preenchido*/}
     {error && <span style={{color: '#f00'}}> {error}</span>}
    </div>
  
    )
}
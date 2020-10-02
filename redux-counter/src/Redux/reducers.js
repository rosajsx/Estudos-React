import {INCREMENT, DECREMENT} from './actions';

const initialState ={
  count: 0
}
//Verifica quais ações foram chamadas
//Ele não seta nenhum valor, apenas retorna o valor
export function Reducer(state = initialState, action){
   switch(action.type){
     case INCREMENT:
       return{
         count: state.count + 1
       };
     case DECREMENT:
       return{
         count: state.count - 1
       };
       default:
         return state;
   }
}
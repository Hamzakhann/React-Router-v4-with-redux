import {GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS} from './constant';


export const fetchUsers = () => dispatch =>{
    console.log('chalo na')
    dispatch({type:GET_USERS_LOADING})
    fetch(`fr.json`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         } 
      })
      .then((response) => response.json())
      .then(data=>{
              dispatch({type:GET_USERS_SUCCESS , payload:data})
      }).catch(error=>{
          dispatch({type:GET_USERS_ERROR , payload:error})
      })
  
    };

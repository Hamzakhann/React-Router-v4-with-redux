import {GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS} from './constant';

const initialState = {
    isLoading:false,
    users:[],
    error:""
};


export default function(state = initialState , action){
  switch (action.type){
    case GET_USERS_LOADING:
      return {
        ...state,
        loading : true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users:[...action.payload],
        loading : false
      };
    case GET_USERS_ERROR:
        return{
          ...state,
          loading : false,
          error:action.payload
        }
    default :
      return state;
  }
}
import {RegisterUserApi} from '../api/UserApi';


export const RegisterUserFun = (FormData) => async(dispatch) =>{
    try{
        await RegisterUserApi(FormData);
        dispatch({type:'USER_STORED', payload:'STORED'})
    }catch(err){
        dispatch({type:'USER_FAILED', payload:err.response.data.error})
    }
}
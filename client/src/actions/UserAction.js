import {RegisterUserApi, verifyEmailApi, LoginUserApi} from '../api/UserApi';


export const RegisterUserFun = (FormData) => async(dispatch) =>{
    try{
        await RegisterUserApi(FormData);
        dispatch({type:'USER_STORED', payload:'STORED'})
    }catch(err){
        dispatch({type:'USER_FAILED', payload:err.response.data.error})
    }
}

export const VerifyemailFun = (FormData, history) => async(dispatch) =>{
    try{
        await verifyEmailApi(FormData)
        history.push('/userpage')
    }
    catch(err){
        dispatch({type:'USER_FAILED', payload:err.response.data.error})
    }
}

export const LoginUserFun = (FormData, history) => async(dispatch) =>{
    try{
        const {data} = await LoginUserApi(FormData)
        console.log(data);
        // history.push('/')
        dispatch({type:'LOGIN_SUCCESS', payload:data});
    }
    catch(err){
        console.log(err);
        dispatch({type:'LOGIN_FAILED', payload:err.response.data.error})
    }
}
import {RegisterUserApi} from '../api/UserApi';


export const RegisterUserFun = (FormData) => async(dispatch) =>{
    try{
        const {data} = RegisterUserApi(FormData);
        console.log(data);
    }catch(err){
        console.log(err);
    }

}
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {VerifyemailFun} from '../../../actions/UserAction';
const Verifyemail = ({history}) =>{
    const [fieldError, setfieldError] = useState({status:false, error:""})
    const dispatch = useDispatch()

    useEffect(() =>{
        const url = new URL(window.location.href);
        const email = url.searchParams.get('email');
        const verifyid = url.searchParams.get('verifyid');
        const userdata = {email, verifyid}
        dispatch(VerifyemailFun(userdata, history));
        // eslint-disable-next-line
    },[])

    const {userSuccess, userFail} = useSelector((state) => state.UserReducer)
    useEffect(() =>{
        if(userFail){
            console.log(userFail)
            setfieldError({...fieldError, status:true, error:userFail})

        } // eslint-disable-next-line
    },[userSuccess, userFail])

    return(
        <>
        {fieldError.status && <h2>{fieldError.error}</h2>}
        </>
    )
}

export default Verifyemail
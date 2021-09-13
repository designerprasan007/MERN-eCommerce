import axios from 'axios';

const userApi = process.env.REACT_APP_USER_URL

export const RegisterUserApi = (formdata) => axios.post(`${userApi}/register`, formdata)

export const verifyEmailApi = (formdata) => axios.post(`${userApi}/verifyemail`, formdata)
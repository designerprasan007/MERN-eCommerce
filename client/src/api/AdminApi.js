import axios from 'axios'
import env from "react-dotenv";


const adminUrl = env.ADMIN_URL;

export const adminLoginApi = (userdata) => axios.post(`${adminUrl}/adminlogin`, userdata);

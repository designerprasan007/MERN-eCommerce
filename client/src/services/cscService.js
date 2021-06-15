import axios from 'axios'

const url = process.env.REACT_APP_CST_URL;
const apisecret = process.env.REACT_APP_API_SECRET;

export const getCountryService = () => axios.get(url,
		{ headers:{
					'X-CSCAPI-KEY': apisecret 
				}}
		)

export const getStateService = (countryname) => axios.get(`${url}/${countryname}/states`,
		{ headers:{
					'X-CSCAPI-KEY': apisecret 
				}}
		)

export const getCitiesService = (countryname, statename) => axios.get(`${url}/${countryname}/states/${statename}/cities`,{
					headers: {
					"X-CSCAPI-KEY": apisecret
			    }}
		    )
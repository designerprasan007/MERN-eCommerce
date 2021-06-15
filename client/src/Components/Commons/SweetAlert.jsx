import SweetAlert from 'react-bootstrap-sweetalert';


const Sweetalert = ({stroreresponse, hideAlert}) =>{
	return(
		<SweetAlert
		  success={stroreresponse.result}
		  error={!stroreresponse.result}	
		  title={stroreresponse.title}
		  onConfirm={hideAlert}
		>
		  {stroreresponse.message}
		</SweetAlert>
		)
}

export default Sweetalert
export const ProdutReducer = (state=[], action) =>{
	switch(action.type){
		case "PRODUCT_STORED":
			return {Prosuccess: action.payload}
		case "PRODUCT_FAILED":
			return{proFailed: action.payload}
		default:
			return state
	}

}
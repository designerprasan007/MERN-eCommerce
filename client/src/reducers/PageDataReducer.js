export const PageData = (state=[], action) =>{
	switch(action.type){
		case 'PAGE_DATA':
			return{pagedata : action.payload}
		case 'NOT_AUTHORIZED':
			return {unautherror: action.payload}
		default:
			return state
	}

}
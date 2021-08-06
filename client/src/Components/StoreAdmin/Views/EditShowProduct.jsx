const  EditShowProduct = ({productParams}) =>{
    const id = productParams.productId;
    console.log(id);
    return(
        <>
        {
        productParams.process === 'delete' ?
             <h1>You sure you want to delete?</h1> : 
             <h1>no delete</h1>}
            
        </>
    )
}

export default EditShowProduct
import styled from 'styled-components'
import Product from './Product';

import {popularProducts} from '../../../Helpers/SliderData';
const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const Products = () => {
    return (
        <Container>
            {popularProducts.map((product, index) =>{
                return(
                    <Product key={index} product={product} />
                )
            })}
        </Container>
    )
}

export default Products

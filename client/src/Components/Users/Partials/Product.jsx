import styled from 'styled-components'
import {ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined} from '@material-ui/icons';

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height: 350px;
    display:flex;
    align-items:center;
    justify-content: center 
`
const Circle = styled.div``
const Image = styled.img`
    height:75%
`
const Info = styled.p``

const Product = ({product}) => {
    return (
        <Container>
             <Circle />
             <Image src={product.img} alt="productimage" />
             <Info>
                <ShoppingCartOutlined />
             </Info> 
             <Info>
                <SearchOutlined />
             </Info> 
             <Info>
                <FavoriteBorderOutlined />
             </Info>   
        </Container>
    )
}

export default Product

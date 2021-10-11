import styled from 'styled-components'
import NavBar from '../Partials/NavBar'
import Announcement  from '../Partials/Announcement';
import Products from '../Partials/Products';
import NewsLetter from '../Partials/NewsLetter';
import Footer from '../Partials/Footer';
import {Colors} from '../../../Helpers/Colors';


const Container = styled.div``;
const Title = styled.h1`
    margin:20px;
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter = styled.div`
    margin:20px;
`;
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px
`
const Select = styled.select`
    padding:10px;
    margin-right:10px;
`
const Option = styled.option``


const ProductList = () => {
    return (
        <Container>
            <NavBar />
            <Announcement />
            <Title>
                Dresses
            </Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select defaultValue="Color">
                        {Colors.map((color) =>{
                            return(
                                <Option key={color.label}>{color.value}</Option>
                            )
                        })}
                    </Select>
                    <Select defaultValue="Size">
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select defaultValue="Newest">
                        <Option>Newest</Option>
                        <Option>Price (High - Low)</Option>
                        <Option>Price (Low - High)</Option>

                    </Select>
                </Filter>
            </FilterContainer>            
        <Products />
        <NewsLetter />
        <Footer />
        </Container>
    )
}

export default ProductList

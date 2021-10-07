import styled from 'styled-components'
import NavBar from '../Partials/NavBar'
import Announcement  from '../Partials/Announcement';

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
    
`;
const Filter = styled.div``;


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
                    Filter1
                </Filter>
                <Filter>
                    Filter2
                </Filter>
            </FilterContainer>            
        </Container>
    )
}

export default ProductList

import styled from 'styled-components';
import NavBar from '../Partials/NavBar';
import Announcement from '../Partials/Announcement';
import Footer from '../Partials/Footer';
import NewsLetter from '../Partials/NewsLetter';
import { Colors } from '../../../Helpers/Colors';
import { Add, Remove } from '@material-ui/icons';
import { useState } from 'react';

const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`
const ImgContainer = styled.div`
    flex:1;

`
const Img = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;   
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px 
`
const Title = styled.h1`
    font-weight:200;

`
const Desc = styled.p`
    margin: 20px 0px
`
const Price = styled.span`
    font-weight:100;
    font-size:40px
`
const FilterContainer = styled.div`
    width:50%;
    display:flex;
    justify-content:space-between;
    margin:30px 0px;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.h3``
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props =>props.color};
    margin:0px 5px;
    border:2px solid black;
    cursor:pointer; 
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width:50%;    
    display:flex;
    align:items:center;
    justify-content:space-between;

`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content: center;
    margin:0px 5px

`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4
    }
`

const SingleProduct = (event) => {
    const [Count, setCount] = useState(1)
    const handleCounts = (event) =>{
        if(Count >= 1){
            if(event === 'desc'){
                setCount(Count - 1)
            }else{
                setCount(Count + 1)
            }
        }
    }
    return (
        <Container>
            <Announcement />
            <NavBar />
            <Wrapper>
                <ImgContainer>
                    <Img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Wrangler</Title>
                    <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting,</Desc>
                    <Price>200 rs</Price>
                    <FilterContainer>
                       <Filter>
                           <FilterTitle>Color</FilterTitle>
                            {Colors.map(color =>{
                                return(
                                    <div key={color.label}>
                                        <FilterColor  title={color.value} color={color.value} />
                                    </div>
                                )
                            })}
                       </Filter>
                       <Filter>
                           <FilterTitle>Size</FilterTitle>
                           <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                           </FilterSize>
                       </Filter>    
                    </FilterContainer>
                    <AddContainer>
                            <AmountContainer>
                                <Remove style={{"cursor":"pointer"}} onClick={(e)=>handleCounts('desc')}/>
                                <Amount>{Count}</Amount>
                                <Add style={{"cursor":"pointer"}} onClick={(e)=>handleCounts('inc')} />
                            </AmountContainer>
                            <Button>
                                Add to cart
                            </Button>
                    </AddContainer> 
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default SingleProduct

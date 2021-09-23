import styled from "styled-components"

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative
`
const Info = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`

const Image = styled.img`
    height:100%;
    width:100%;
    object-fit:cover
`
const Title = styled.p`
    color:white;
    font-weight: 800;
    margin-bottom:20px;

`

const Button = styled.button`
    border:none;
    padding;10px;
    background-color: white;
    color:gray;
    cursor:pointer;
    font-weight:800
`


const CatagoryItem = ({catagory}) => {
    return (
        <Container>
            <Image src={catagory.img} />
            <Info>
                <Title>{catagory.title}</Title>
                <Button>SHOP NOW</Button>

            </Info>
        </Container>
    )
}

export default CatagoryItem

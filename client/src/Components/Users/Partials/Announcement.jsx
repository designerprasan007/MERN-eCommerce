import styled from "styled-components"
const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-item:center;
    justify-content:center;
    font-size:14px;
    font-weight:bolder;

` 
const Announcement = () => {

    return (    
        <Container>
                New Arrival Offer!!
        </Container>
    )
}

export default Announcement

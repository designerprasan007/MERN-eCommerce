import { Announcement } from "@material-ui/icons"
import styled from "styled-components"
import Footer from "../Partials/Footer"
import NavBar from "../Partials/NavBar"

const Container = styled.div``
const Wrapper = styled.div``
const Title = styled.h3``
const Top = styled.div``
const Bottom  = styled.div``



const Cart = () => {
    return (
        <Container>
            <NavBar />
            <Announcement />
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top></Top>
                    <Bottom></Bottom>

                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart

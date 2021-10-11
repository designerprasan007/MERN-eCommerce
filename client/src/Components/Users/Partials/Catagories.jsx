import styled from "styled-components"

import CatagoryItem from './CatagoryItem';
import {categories} from '../../../Helpers/SliderData';
const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
`
const Catagories = () =>{
    return(
        <Container >
            {categories.map((cata, index) =>{
                return(
                        <CatagoryItem key={index} catagory={cata} /> 
                )
            })}
        </Container>
    )
}

export default Catagories
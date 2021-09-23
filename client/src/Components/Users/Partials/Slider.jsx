import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {sliderItems} from '../../../Helpers/SliderData';
const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position: relative;
    overflow:hidden
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#f7f7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === 'left' && "10px"};
    right:${props => props.direction === 'right' && "10px"};
    cursor:pointer;
    opacity:0.5;
    margin:auto;
    z-index:2
`

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform: translatex(${props => props.currentIndex * -100}vw);
`


const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props => props.bg }

`

const Image = styled.img`
    height:80%;
`

const ImageContainer = styled.div`
    flex:1;
    height:100%;
`


const InfoContainer = styled.div`
    flex:1;
    padding:50px
`
const Title = styled.h1`
    font-size:79px
`
const Description = styled.p`
    margin-top: 50px 0px;
    font-size:20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding:10px;
    font-size: 20px;
    background-color:transparent;
    cursor:pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) =>{
        if(direction === 'right'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        if(direction === 'left'){
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)

        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper currentIndex={slideIndex}>
                {sliderItems.map((slide, index) =>{
                    return(
                        <Slide key={index} bg={slide.bg}>
                            <ImageContainer>
                                <Image src={slide.img} />
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{slide.title}</Title>
                                <Description>{slide.desc}</Description>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    )
                })}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider

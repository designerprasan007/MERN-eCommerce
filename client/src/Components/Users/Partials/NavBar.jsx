import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Badge} from '@material-ui/core';
import {ShoppingCartOutlined} from '@material-ui/icons';
const Container = styled.div`
    height:60px;
`
const Wrapper  = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center
    justify-content:space-between;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer
`
const SearchContainer = styled.div`
    border:0.5px solid black;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px
`
const Input = styled.input`
    border:none
`


const Center = styled.div`
    flex:1;
    text-align:center;

    `

const Logo = styled.h1`
    font-weight:bold
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor:pointer;
    margin-left:25px
`
const NavBar = () =>{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <FontAwesomeIcon icon={faSearch } style={{color:'gray', fontSize:13}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>E-bay.</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
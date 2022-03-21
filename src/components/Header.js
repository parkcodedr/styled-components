import {StyledHeader,Nav,Logo} from './styles/Header.styled';
import {Container} from './styles/Container.styled';
import {Flex} from './styles/Flex.styled';
import {Button} from './styles/Button.styled';
const Header = ()=>{
    return (
        <StyledHeader bg={'#ebfbff'}>
            <Container>
            <Nav>
                <Logo src={'/logo192.png'}/>
                <Button bg={'blue'} color={'white'}>Try for Free</Button>
            </Nav>

            <Flex>
                <div>
                    <h1>Build something amazing that suit your brand</h1>
                    <p>
                    our focus is on planning, organizing and supervising corporate and 
                    social events for discerning clients. 
                    Our hallmark is excellence and professionalism.
                    </p>
                </div>
                <img src={"/vector1.png"} width="50%" height="50%"/>
                
            </Flex>
            </Container>
            
       
        </StyledHeader>
            
        
    )
}

export default Header;
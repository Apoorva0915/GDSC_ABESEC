import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function NavBar() {

    return (
        <Container>
            <Link to='/'>
                <Logo>
                    <img src="./Images/profile_img.png" alt="Oh!" />
                    <LogoText>
                        <Heading>Google Developer Student Clubs</Heading>
                        <CollegeName>ABES Engineering College,Ghaziabad</CollegeName>
                    </LogoText>
                </Logo>
            </Link>
                <PcLinks>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <a href="https://abesec-gdsc.netlify.app/#team" rel="noreferrer" target='_blank'>
                        <li>Team</li>
                    </a>
                    <Link to='/technologies'>
                        <li>Technologies</li>
                    </Link>
                    <Link to='/projects'>
                        <li>Projects</li>
                    </Link>
                    <a href="https://gdsc.community.dev/events/#/list" rel="noreferrer" target='_blank'>
                        <li>Events</li>
                    </a>

                </PcLinks>
        </Container>
    )
}

export default NavBar;

const Container = styled.div`
    z-index: 1;
    color: black;
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    top: 0;
    position: sticky;
    height: 70px;
    align-items: center;
    padding: 0px 30px;
    background-color:white;
    box-shadow: 0 0 12px 0 #9b9595;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    color: black;
    cursor: pointer;
    img{
        height: 60px;
    }
`;
const LogoText = styled(Logo)`
    font-weight: 600;
    flex-direction: column;
    justify-content: center;
`;
const Heading = styled.div`
    font-size: 18px;
    @media (max-width: 824px)
    {
        font-size: 14px;
    }
`;
const CollegeName = styled.div`
    font-size: 14px;
    @media (max-width: 824px)
    {
        font-size: 12px;
    }
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    list-style: none;
    li{
        padding: 0.5rem;
        font-weight: 600;
        color: black;
    }
    li:hover,
    li:focus 
    {
        border-bottom: 1px solid red;
        transition: all 0.2s ease-in-out;
        padding: 0.5rem;
        background-color: EAECEE;
        ;
        color:black;
    }
    
`;
const PcLinks = styled(Links)`
    li{
        cursor: pointer;
    }
    @media (max-width: 824px)
    {
        display: none;
    }
    ion-icons{
        color: blue;
    }
`

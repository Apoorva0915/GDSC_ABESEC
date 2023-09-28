import React from 'react'
import styled from 'styled-components';

function About() {
   return (
      <Container id='about'>
            <Body>
               <Heading>
                  <h2>Google Developer Student Clubs</h2>
                  <h2><strong>ABES Engineering College</strong></h2>
               </Heading>
               <p>Google Developer Student Clubs Are University Based Community Groups For Students Interested In Google Developer Technologies. Students From All Undergraduate Or Graduate Programs With An Interest In Growing As A Developer Are Welcome. By Joining A GDSC, Students Grow Their Knowledge In A Peer-To-Peer Learning Environment And Build Solutions For Local Businesses And Their Community.
               <ul>
                  <Part>
                     <li>Gain relevant industry experience by solving problems for local organizations with technology based solutions.</li>
                     <li>Showcase their prototypes and solutions to their local community and industry.</li>
                     <li>Grow their knowledge on developer technologies and more through peer to peer</li>
                     <li>Getting inspiration to become world-class developers and changemakers.</li>
                  </Part>
               </ul>
               </p>
               <ButtonTab>
                  <Button><a href='https://gdsc.community.dev/abes-engineering-college-ghaziabad/'>Join us</a></Button>
               </ButtonTab>
            </Body>
         <Picture>
               <img src='/Images/about1.gif' alt='404, Object not found' />
         </Picture>
      </Container>
   )
}

export default About

const Container = styled.div`
margin:10px 0;

   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   padding: 10px 40px;
   @media (max-width: 993px)
    {
         flex-direction: column;
         height: fit-content;
         padding: 0px 10px !important;
    }
    background:url("/Images/gdsc-india-android-study-jams.png") no-repeat;
    background-size: 100% 100%;
`;

const Heading = styled.div`
   h2{
      padding: 2px;
      font-size:2rem;
   }
`;

const Body = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 50vw;
   margin: 20px;
   color: var(--about-para);
   p{
      padding: 20px;
   }
   @media (max-width: 824px)
    {
         margin: 0;
         width: 100%;
         p{
            padding: 10px !important;
         }
    }
`;

const Part = styled.div`
   margin-top: 5px;
   margin-left: 25px;
   @media (max-width: 824px)
    {
         margin: 10px;
    }
`

const Picture = styled.div`
   width: 50vw;
   display: flex;
   align-items: center;
   justify-content: center;
    img{
        width: 450px;
        fit-content: contain;
    }
    @media (max-width: 824px)
    {
        img{
            width: 250px;
        }
    }
`;
const ButtonTab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    Button:hover{
      background-color: lightblue;
      box-shadow: 0 3px 6px rgb(0 110 255 / 40%);
      a{
         color: black;
      }
    }
`;

const Button = styled.button`
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    font-weight: 800;
    background-color: blue;
    cursor: pointer;
    border: 0px;
    a{
       text-decoration: none;
       color: white;
    }
`;


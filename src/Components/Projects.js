import React from 'react'
import styled from 'styled-components';

const Projects = () => {
  return (
    <div>
        <Container>
            
        <div class="projecthome" id="PROJECT"><h1 class="project-head">PROJECTS</h1>
        <p>Building real time solutions to tackle real world problems. Our projects speak themselves of the calibre we hold.</p><a href="https://github.com/Developer-Students-Club-ABESEC" target="_blank" rel="noreferrer"><button class="project-button">View Projects</button></a></div>
        </Container>
    </div>
  )
}

export default Projects

const Container=styled.div`
/* .projects{
    height:100vh;
    background-color: green;
} */
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
.projecthome {
}
.projecthome h1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    letter-spacing: 1.3125px;
    padding: 18px;
}
.projecthome p {
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.59375px;
    color: rgb(163, 155, 142);
    max-width: 50%;
    margin: auto;
    padding-bottom: 15px;
}

.project-button {
    font-family: Inter;
    background: #18A0FB;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    display: flex;
    justify-content: center;
    padding: 10px 16px;
    margin: 10px auto;
    border: none;
    align-items: center;
    line-height: 25px;
    text-decoration: none;
    text-align: center;
    letter-spacing: -0.03em;
    background-image: initial;
    background-color: rgb(3, 114, 189);
    color: rgb(232, 230, 227);
}

button{
    background-color: rgb(20, 97, 220) !important;
}
button:hover{
    background-color: #DB4437!important;
}
a{
    text-decoration: none;
}


@media screen and (max-width:768px){
    .projecthome p{
        font-size: 17px;
        max-width: 90%;
    }

    .projecthome button{
        border: none;
        border-radius: 5px;
    }


}
`

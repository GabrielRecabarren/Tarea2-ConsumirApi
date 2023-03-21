import styled from "styled-components";

const MusicBtnStyled = styled.button`
position: fixed;
bottom: 0;
right: 0;
padding: 20px 20px;
margin: 20px 20px;
background: transparent ;
font-size: large;
font-weight: bold;
transition: .5s ease-in-out ;
border-radius: 100px;
z-index: 999;

  &:hover {
    scale: 1.05;
    box-shadow: #f0f 0 0 20px, 
    #f0f 0 0 40px, 
    #f0f 0 0 60px;
    transition: .5s ease-in-out ;
  }
  @media (max-width: 400px) {
    font-size: small;
    border-radius:100%;
    margin:5px;
    padding:5px
  
   
    
    }
  }
  
`;

export default MusicBtnStyled;

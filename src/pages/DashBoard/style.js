import styled from "styled-components";

export const Container = styled.div`
@media (min-width: 700px){
    margin-bottom: 800px;
    .header{
     border-bottom: 1px solid #212529;
     width: 100vw;
     display: flex;
     justify-content: space-around;
     align-items: center;
    }
    .header button{
      margin-bottom: 25px;
      width: 55.49px;
      height: 32px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      gap: 10px;
      background-color: #212529;
      color: #F8F9FA;
      font-size: 12px;
      font-weight: 600;   
    }
    .header svg{
     margin-bottom: 25px;
    }
    .conteudo{
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #212529;
      margin-top: 50px;
    }
    .conteudo h1{
         font-size: 18px;
         font-weight: 700;
         color: #F8F9FA;
         margin-bottom: 50px;
         margin-left: 89px;
    }
    .conteudo h2{
         font-size: 12px;
         font-weight: 600;
         color: #868E96;
         margin-bottom: 50px;
         margin-right: 75px;
    }
    .erro{
     display: flex;
     flex-direction: column;
     margin-left: 336px;
    }
    .erro svg{
     margin-top: 40px;
    }
}
   @media (max-width: 700px){
    margin-bottom: 880px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header{
     border-bottom: 1px solid #212529;
     width: 100vw;
     display: flex;
     justify-content: space-around;
     align-items: center;
    }
    .header button{
        margin-bottom: 25px;
    }
    .header svg{
        margin-bottom: 25px;
    }
    .erro{
        display: none;
    }
    .conteudo{
        margin-top: 25px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-bottom: 1px solid #212529;   
    }
    .conteudo h1{
        font-size: 18px;
        font-weight: 700;
        margin-left: 90px;
        margin-bottom: 25px;
    }
    .conteudo h2{
        font-size: 12px;
        font-weight: 400;
        color: #868E96;
        margin-left: 90px;
        margin-bottom: 25px;
    }
   }
`
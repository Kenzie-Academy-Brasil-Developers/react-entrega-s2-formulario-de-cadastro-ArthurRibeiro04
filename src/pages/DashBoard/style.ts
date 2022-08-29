import styled from "styled-components";

export const Container = styled.div`
@media (min-width: 700px){
    
    
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
    margin-top: 25px;
    margin-bottom: 50px;
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
    .tecnologias{
    display: flex;
    align-items: center;
   }
   .tecnologias p{
        font-size: 16px;
        font-weight: 600;
        margin-right: 100px;
   }
   .tecnologias button{
        background-color: #212529;
        width: 33px;
        height: 32px;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 16px;
        margin-left: 100px;
   }
   }
   .tecnologias{
    display: flex;
    align-items: center;
    justify-content: space-around
   }
   .tecnologias p{
        font-size: 16px;
        font-weight: 600;
   }
   .tecnologias button{
        background-color: #212529;
        width: 33px;
        height: 32px;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 16px;
   }
`

export const Tecnologias = styled.ul`
    width: 800px;
    height: 416px;
    background-color: #212529;
    margin-bottom: 400px;
    overflow-y: auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    ::-webkit-scrollbar-thumb{
    background-color: #868E96;
     border-radius: 8px;       
    }
    li{
        margin-right: 28px;
        width: 782px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        background-color: #121214;
        cursor: pointer;
    }
    li:hover{
        background-color: #343B41;
    }
    li button{
        background-color: transparent;
        border: none;
    }
    li p{
        margin-left: 20px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }
    li span{
        font-size: 12px;
        font-weight: 400;
        color: #868E96;
        margin-right: 20px;
        cursor: pointer;
    }
    @media (max-width: 700px){
    max-width: 400px;
    height: 416px;
    background-color: #212529;
    margin-bottom: 400px;
    overflow-y: auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    ::-webkit-scrollbar-thumb{
    background-color: #868E96;
     border-radius: 8px;       
    }
    li{
        margin-right: 28px;
        max-width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        background-color: #121214;
        cursor: pointer;
    }
    li:hover{
        background-color: #343B41;
    }
    li button{
        background-color: transparent;
        border: none;
    }
    li p{
        margin-left: 20px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }
    li span{
        font-size: 12px;
        font-weight: 400;
        color: #868E96;
        margin-right: 20px;
        cursor: pointer;
    }
    }
`
import styled from "styled-components";

export const Formulario = styled.div`
    width: 370px;
    height: 980px;
    background-color: #212529;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input{
        margin-top: 20px;
    }
    .cadastro{
        margin-top: 40px;
        width: 326px;
        height: 48px;
        border-radius: 4px;
        padding: 0px 22px 0px 22px;
        gap: 10px;
        background-color: #59323F;
        border: 1.22px solid #59323F;
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF; 
    }
    span{
        margin-top: 10px;
        font-size: 12px;
        color: #E83F5B;
        font-weight: 500;
        display: flex;
        width: 329px;
    }
    h1{
        font-size: 18px;
        font-weight: 700;
        color:#F8F9FA;
    }
    p{
        font-size: 12px;
        font-weight: 400;
        color: #868E96;
    }
    label{
        margin-top: 20px;
        font-size: 12.18px;
        font-weight: 400;
        color: #F8F9FA;
        margin-right: 130px;
        display:flex;
        width: 200px
    }
    input{
        width: 300px;
        height: 48px;
        border-radius: 4px;
        padding: 0px 16px 0px 16px;
        gap: 10px;
        background-color: #343B41;
        border: 1px solid #343B41;
        font-size: 16.24px;
        font-weight: 400;
        color: #868E96;
    }
    select{
        margin-top: 20px;
        width: 330px;
        height: 48px;
        border-radius: 4px;
        padding: 0px 16px 0px 16px;
        gap: 10px;
        background-color: #343B41;
        border: 1px solid #343B41;
        font-size: 16.24px;
        font-weight: 400;
        color: #868E96;
    }  
`

export const Absolute = styled.div`
    div{
        
        position: absolute;
        margin-left: 0px;
        top: 20px;
        right: 20px;
    }
`

export const Header = styled.div`
    display: flex;
    width: 370px;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 25px;
    button{
        width: 67.49px;
        height: 40.11px;
        border-radius: 4px;
        padding: 0px 16px 0px 16px;
        gap: 10px;
        background-color: #212529;
        color: #F8F9FA;
        font-weight: 600;
        font-size: 12px;
        
    }
`

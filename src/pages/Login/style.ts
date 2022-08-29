import styled from "styled-components";

export const FormularioLogin = styled.div`
    background-color: #212529;
        width: 369px;
        height: 502px;
    margin-top: 50px;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input{
        width: 300px;
        height: 48px;
        border-radius: 4px;
        padding: 0px 16px 0px 16px;
        background-color: #343B41;
        color: #F8F9FA;
        border: 1.22px solid #F8F9FA;
        font-size: 16.24px;
        margin-bottom: 20px;
    }
    h1{
        font-size: 18px;
        color: #F8F9FA;
        margin-top: 40px;
    }
    label{
        font-size: 12px;
        font-weight: 400;
        color: #F8F9FA;
        margin-right: 300px;
        margin-bottom: 10px;
    }
    p{
        font-weight: 600;
        font-size: 12px;
        color: #868E96;
        margin-bottom: 10px;
    }
    .entrar{
        width: 324px;
        height: 48px;
        border-radius: 4px;
        padding: 0px 22px 0px 22px;
        gap: 10px;
        background-color: #FF577F;
        border: 1px solid #FF577F;
        font-size: 16px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 30px;
    }
    .entrar:hover{
        background-color: #DF1444;
    }
    .cadastro{
        width: 324px;
        height: 48px;
        border-radius: 4px;
        padding: 0px 22px 0px 22px;
        gap: 10px;
        background-color: #868E96;
        border: 1px solid #868E96;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 700;

    }
    .cadastro:hover{
        background-color: #63676A;
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

export const Container = styled.div`
    margin-bottom: 400px;
`

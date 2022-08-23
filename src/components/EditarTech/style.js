import styled from "styled-components";

export const Modal = styled.div`
    background-color: rgb(0, 0, 0, 0.5);
    position: fixed;
    z-index: 2;
    height: 150vh;
    width: 200vh;
    display: flex;
    justify-content: center;

    .container{
        background-color: #212529;
        margin-top: 50px;
        border-top: 60px #343B41 solid;
        width: 342px;
        height: 309px;
        border-radius: 8px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .fechar{
        background-color: #343B41;
        border: none;
        color: #868e96;
        font-size: 16px;
        font-weight: 600;
        position: absolute;
        top: 70px;
        right: 610px;
    }
    h1{
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        top: 60px;
        left: 610px;
    }
    input{
        width: 270px;
        height: 48px;
        border-radius: 4px;
        background-color: #343B41;
        border: #F8F9FA 1.22px solid;
        color: #868E96;
        font-size: 16.24px;
        font-weight: 400;
        padding: 0px 16px 0px 16px;
        gap: 10.15px;
    }
    select{
        width: 305px;
        height: 48px;
        border-radius: 4px;
        background-color: #343B41;
        border: #F8F9FA 1.22px solid;
        color: #F8F9FA;
        font-size: 16.24px;
        font-weight: 400;
        padding: 0px 16px 0px 16px;
        gap: 10.15px;
    }
    label{
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 12.18px;
        font-weight: 400;
        color: #F8F9FA;
        display: flex;
        justify-content: flex-start;
        width: 300px;
    }
    .editar{
        margin-top: 30px;
        margin-right: 5px;
        width: 204px;
        height: 48px;
        border-radius: 4px;
        padding: 0px 22px 0px 22px;
        background-color: #FF577F;
        border: 1.22px solid #FF577F;
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
        
    }
    .editar:hover{
        background-color: #59323F;
        border: #59323F;
    }
    .deletar{
        margin-top: 30px;
        margin-left: 5px;
        width: 98px;
        height: 48px;
        border-radius: 4px;
        padding: 0px 22px 0px 22px;
        background-color: #868E96;
        border: 1.22px solid #868E96;
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
    }
    .deletar:hover{
        background-color: gray;
        border: gray;
    }
   

`
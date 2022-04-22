import styled from "styled-components";


export const Container = styled.div`
    background-color: #5d3e5b;
    color: #FFF;
    min-height: 100vh;
    margin: auto;
`

export const Area = styled.div`
    margin: auto; 
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px
`

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const UploadForm = styled.form`
    background-color: #a17e9e;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;

    input[type=submit] {
        background-color: #756Df4;
        border: 0;
        color: white;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

`
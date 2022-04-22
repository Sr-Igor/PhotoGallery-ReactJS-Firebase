import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    width: 100%;

    div {
        max-width: 250px;
        display: flex;
        flex-direction: column;
        justfy-content: center;
        align-items: center;
        text-align: center;
        background-color: #a17e9e;
        padding: 15px;
        border-radius: 15px;
    }

    img {
        max-width: 200px;
    }
`
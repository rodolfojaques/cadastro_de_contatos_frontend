import styled from "styled-components";

const CardStl = styled.div`

    background-color: #080818;

    width: 90%;
    max-width: 500px;
    min-height: 110px;
    max-height: 265px;

    padding: 1rem;
    margin-bottom: .5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    ul{
        width: 100%;
        height: inherit;

        display: flex;
        flex-direction: column;

        justify-content: flex-start;
        gap: .8rem;

        overflow-y: auto;
    }

    p{
        font-size: small;
    }

    hr{
        margin-top: .5rem;
    }

    @media (min-width: 700px) {
        width: 30%;
        max-width: 215px;
        min-height: 45vh;
    }

`

export default CardStl
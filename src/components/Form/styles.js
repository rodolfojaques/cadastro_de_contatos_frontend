import styled from "styled-components";

const FormStl = styled.form`

    width: 90%;
    max-width: 500px;
    height: 65vh;
    min-height: 460px;

    border-radius: 5px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    background-color: #080818;

    .container{
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: .3rem;
    }

    input{
        width: 100%;
        height: 2rem;

        &::placeholder{
            padding-left: .5rem;
        }
    }

    .button_form{
        background-color: purple;
        color: antiquewhite;

        border-style: none;
        cursor: pointer;

        font-weight: bold;
    }

    @media (min-width: 700px) {
        width: 50%;
    }
`

export default FormStl
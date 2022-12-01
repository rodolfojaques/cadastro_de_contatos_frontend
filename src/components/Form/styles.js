import styled from "styled-components";

const FormStl = styled.form`

    width: 90%;
    height: 65vh;

    border-radius: 5px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    background-color: #080818;

    input{
        width: 100%;
        height: 2rem;

        &::placeholder{
            padding-left: .5rem;
        }
    }
`

export default FormStl
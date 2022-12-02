import styled from "styled-components";

const ContactsStl = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .section_style{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        justify-content: center;
        align-items: center;
    }

    @media (min-width: 700px) {
        gap: 4rem;
        .section_style{
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 2rem;

            justify-content: center;
            align-items: flex-start;
        }
    }

`

export default ContactsStl
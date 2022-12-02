import FormStl from "./styles";

function Form ({children, onSubmit}) {
    return (
        <FormStl onSubmit={onSubmit}>
            {children}
        </FormStl>
    )
}

export default Form
import CardStl from "./styles"
import { ClientContext } from "../../providers/client";
import { useContext } from "react";

function Card (){
    

    const { user } = useContext(ClientContext)

    return(
        <CardStl>
            <h3 style={{color:"purple"}}>Contatos de {user?.fullName?.split(" ")[0]}</h3>
            <ul>
                {user?.contacts?.map((contact,i) => (
                    <li key={i}>
                        <p>Nome: {contact.fullName}</p>
                        <p>Email: {contact.email}</p>
                        <p>Telefone: {contact.telephone}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </CardStl>
    )
}

export default Card
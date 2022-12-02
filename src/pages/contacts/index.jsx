import ContactsStl from "./styles"
import Header from "../../components/Header"
import Form from "../../components/Form"
import Card from "../../components/Card"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import axios from "axios";
import { ClientContext } from "../../providers/client";
import { useContext } from "react";

function Contacts () {

  const { user, setUser } = useContext(ClientContext)

  const schema = yup.object().shape({
      fullName: yup.string().required("Nome completo é um campo obrigatório*"),
      email: yup.string().email("formato de e-mail inválido").required("Email é um campo obrigatório"),
      telephone: yup.string().required("Telefone é um campo obrigatório*")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  })

  
  const formSchema = async data => {

    const alreadyExists = user?.contacts?.find(contact=> contact.email === data.email)
    !alreadyExists?(
      axios.post(`http://localhost:3001/contact/${user.id}`, data)
      .then(resp => {
        axios.get("http://localhost:3001/client")
        .then((res) => {
          const alreadyExists = res.data.find(client=> client.email === user.email)
          if(!!alreadyExists) {
            localStorage.setItem("UserClient", JSON.stringify(alreadyExists))
            setUser(alreadyExists)
          }
        })
      })
    ):<></>  
  }
    return(
        <ContactsStl>
          <Header />
          <section className="section_style">
            <Form onSubmit={handleSubmit(formSchema)}>
              <h2>Cadastre seus Contatos</h2>
              <div className="container">
                <input 
                type="text" 
                name="fullName" 
                id="fullName" 
                placeholder="Digite seu nome completo aqui..."
                {...register("fullName")}
                />
                {errors?.fullName?.message && <span style={{color:"red", fontSize:"12px", textAlign:"start"}}>{errors?.fullName?.message}</span>}                
              </div>
              <div className="container">
                <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder="Digite seu email aqui..."
                {...register("email")} 
                />
                {errors?.email?.message && <span style={{color:"red", fontSize:"12px", textAlign:"start"}}>{errors?.email?.message}</span>}              
              </div>
              <div className="container">
                <input 
                type="text" 
                name="telephone" 
                id="telephone" 
                placeholder="Digite seu telefone aqui..."
                {...register("telephone")} 
                />
                {errors?.telephone?.message && <span style={{color:"red", fontSize:"12px", textAlign:"start"}}>{errors?.telephone?.message}</span>}                
              </div>
              <input className="button_form" type="submit" value="Registrar" />
            </Form>
            <Card />
          </section>
        </ContactsStl>
    )
}

export default Contacts
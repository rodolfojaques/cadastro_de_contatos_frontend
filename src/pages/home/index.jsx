import HomeStl from "./styles"
import Header from "../../components/Header"
import Form from "../../components/Form"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";

import axios from "axios";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../providers/client";

function Home () {

  const {setUser} = useContext(ClientContext)

  useEffect(()=> {
    localStorage.clear()
  },[])

  const history = useHistory()

  const schema = yup.object().shape({
      fullName: yup.string().required("Nome completo é um campo obrigatório*"),
      email: yup.string().email("formato de e-mail inválido").required("Email é um campo obrigatório"),
      telephone: yup.string().required("Telefone é um campo obrigatório*")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  })

  
  const formSchema = async data => {
    
    axios.get("http://localhost:3001/client")
    .then((resp) => {
      const alreadyExists = resp.data.find(client=> client.email === data.email)
      if(!!alreadyExists) {
        localStorage.setItem("UserClient", JSON.stringify(alreadyExists))
        setUser(alreadyExists)
      } else { 
      axios.post("http://localhost:3001/client", data)
      .then(resp => {
        localStorage.setItem("UserClient", JSON.stringify(resp.data))
        setUser(resp.data)
      })
      .catch(err => console.log(err))
      }
      history.push("/contacts")
    })
    .catch(err => console.log(err))    
  }

    return(
        <HomeStl>
          <Header />
          <section className="section_style">
            <Form onSubmit={handleSubmit(formSchema)}>
              <h2>Cadastre-se</h2>
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
          </section>
        </HomeStl>

    )
}

export default Home
import HomeStl from "./styles"
import Header from "../../components/Header"
import Form from "../../components/Form"

function Home () {
    return(
        <HomeStl>
          <Header />
          <section className="section_style">
            <Form>
              <h2>Cadastre-se</h2>
              <input 
              type="text" 
              name="fullName" 
              id="fullName" 
              placeholder="Digite seu nome completo aqui..." 
              />
              <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="Digite seu email aqui..." 
              />
              <input 
              type="text" 
              name="telephone" 
              id="telephone" 
              placeholder="Digite seu telefone aqui..." 
              />
            </Form>
          </section>
        </HomeStl>

    )
}

export default Home
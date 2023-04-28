import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components"
import api from "../services/api";

export default function SignUpPage() {

  const [formData, setFormData] = useState({name:'', email:'', password:'', confirmPassword:'', rua: "", numero: "", complemento: "", cidade: "", estado: ""});
  const navigate = useNavigate();


  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert("As senhas precisam ser as mesmas!")

    const {confirmPassword, ...sendData} = formData;
    console.log(sendData)

    const promise = api.signUp({ ...sendData });
    promise.then((response) => {
      console.log(response.data);
      navigate("/");
    });
    promise.catch((error) => {
    if (error.response.status === 422) {
        alert("O cadastro falhou. Verifique se os dados foram preenchidos corretamente! (A senha precisa ter no mínimo 3 caracteres)")
    }else if (error.response.status === 409) {
        alert("Email já utilizado")
    } 
    });
  }

  return (
    <SingUpContainer>
    <h1>Footwear</h1>
      <Form onSubmit={handleSubmit}>
        <Input 
        placeholder="Nome" 
        type="text" 
        name="name"
        onChange={handleChange}
        value={formData.name}
        required/>

        <Input 
        placeholder="E-mail" 
        type="email"
        name="email" 
        onChange={handleChange}
        value={formData.email}
        pattern="^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$"
        title="Precisa ser um email valido. Exemplo (nome@dominio.com)"
        required/>

        <Input 
        placeholder="Senha" 
        type="password" 
        name="password"
        autocomplete="new-password" 
        onChange={handleChange}
        value={formData.password}
        required />

        <Input 
        placeholder="Confirme a senha" 
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
        required
        />
        
        <h2>Endereço</h2>

        <h1>Endereço</h1>
        <Input  
        name="rua"
        placeholder="Rua"
        value={formData.rua}
        required
        onChange={handleChange}/>

       <Input25
        name="numero"
        placeholder="Número"
        value={formData.numero}
        required
        onChange={handleChange}/>

       <Input75
        name="complemento"
        placeholder="Complemento"
        value={formData.complemento}
        required
        onChange={handleChange}/>

       <Input 
        name="cidade"
        placeholder="Cidade"
        value={formData.cidade}
        required
        onChange={handleChange}/>

      <Input 
        name="estado"
        placeholder="Estado"
        value={formData.estado}
        required
        onChange={handleChange}/>

        <Button type="submit">Cadastrar</Button>
      </Form>

      <Link to="/"> 
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  h1{
    font-size: 60px;
    margin-bottom: 15%;
    margin-top: 5%;
  }

  h2{
    font-size: 50px;
    margin-bottom: 15%;
    margin-top: 5%;
  }
`
const Form = styled.form``
const Button = styled.button`
        outline: none;
        border: none;
        border-radius: 30px;
        background-color: #FFFFFF;
        font-size: 20px;
        font-weight: 600;
        color: #b61c1c;
        cursor: pointer;
        width: 100%;
        padding: 12px;
    `
const Input = styled.input``
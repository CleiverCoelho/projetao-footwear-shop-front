
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import styled from "styled-components"
import api from "../services/api";
import UserContext from "../contexts/UserContext";
import axios from "axios";
export default function SignUpPage() {

  const [formData, setFormData] = useState({name:'', email:'', password:'', confirmPassword:''});
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  if(user){
    navigate("/sign-in")
  }


  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
     
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert("As senhas precisam ser as mesmas!")
  console.log(formData);
    let cadastro = {...formData};
    delete cadastro.confirmPassword;
    axios.post("https://footwearshop-api.onrender.com/sign-up", cadastro)
    .then(
      (res) => {navigate("/sign-in")}
    )
    .catch(
      (err) => {console.log(err.response.status)}
    )
  }

  return (
    <>
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

        <Button type="submit">Cadastrar</Button>
      </Form>

      <Link to="/sign-in"> 
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>

</>
  )
}

const SingUpContainer = styled.section`
background-color: #b61c1c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  h1{
    font-size: 60px;
    margin-bottom: 15%;
    margin-top: 5%;
  }
  
`

const Form = styled.form`
display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
        margin-bottom:20px`


const Input = styled.input`
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 30px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
    }` 
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
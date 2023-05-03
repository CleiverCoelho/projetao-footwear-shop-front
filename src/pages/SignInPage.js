import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import api from "../services/api";
import axios from "axios";



export default function SignInPage() {
  const {user, login} = useContext(UserContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  if(user){
    navigate("/profile")
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    axios.post("http://localhost:5000/sign-in", formData)
    .then(
      (res) => {login(res.data);navigate("/")}
    )
    .catch(
      (err) => {alert(err.response.status)}
    )
  }

  return (
    <SingInContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Footwear</h1>
        <Input 
        placeholder="E-mail" 
        type="email" 
        name="email"
        onChange={handleChange}
        value={formData.email}
        required/>

        <Input 
        placeholder="Senha" 
        type="password" 
        name="password"
        autocomplete="new-password" 
        onChange={handleChange}
        value={formData.password}
        required/>

        <Button type="submit">Entrar</Button>
      </Form>

      <Link to="/sign-up">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
background-color: #b61c1c;
padding: 25px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-size: 60px;
    margin-bottom: 15%;
    margin-top: 5%;
  }
`
const Form = styled.form`
margin-bottom: 20px`

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





import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components"
import api from "../services/api";

export default function AddressPage() {
  const [formData, setFormData] = useState({rua:'', numero:'', complemento:'', cidade:'', estado:''});
  const navigate = useNavigate();


  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {

  }



  return (
    <>

    <AddressContainer>

<h1>Endereço</h1>
<Form>
    <Input  
      name="rua"
      placeholder="Rua"
      value={formData.rua}
      required
      onChange={handleChange}/>

    <Input
      name="numero"
      placeholder="Número"
      value={formData.numero}
      required
      onChange={handleChange}/>

    <Input
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
  
    </AddressContainer>
</>
  )
}


const AddressContainer = styled.section`
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
display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;`
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
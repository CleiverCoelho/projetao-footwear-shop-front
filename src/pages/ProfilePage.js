
import { useContext, useState, useEffect } from "react"
import UserContext from "../contexts/UserContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {GiConverseShoe, GiShoppingCart} from "react-icons/gi";
import styled from "styled-components";


export function ProfilePage(){
  const [userData, setUserData] = useState({name: "", email: "", password: "", pedidos: [] });
  const [ editardados, setEditarDados] = useState(true);
  const { user, login } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [busca,setBusca] = useState("");


  if(!user){
    navigate("/sign-in");
  }


  function logout(){
    login({});
    navigate("/");
}
function definirbusca(e){
  setBusca(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
}
  function handleChange(e) {
  setUserData({ ...userData, [e.target.name]: e.target.value });
}
  function salvarmudançasdados(e){
    e.preventDefault();
    setLoading(true);
    let novosdados = {name: userData.name, password: userData.password, email: userData.email};
    console.log(novosdados)
    axios.put("http://localhost:5000/user", novosdados,  {headers:{
      "Authorization": `Bearer ${user.token}`
    }})
    .then(
      (res) => {axios.get("http://localhost:5000/user", {headers:{
        "Authorization": `Bearer ${user.token}`
      }})
      .then(
        (res) => {
          setUserData(res.data);
  
        }
      )
      .catch(
        (err) => {alert(err.response.status)}
      );setEditarDados(true); setLoading(false)}
    )
    .catch(
      //tbm altera editar
      (err) => {alert(err.response.status); setEditarDados(true); setLoading(false)}
    )
  }
   
  useEffect(() => {
    axios.get("https://footwearshop-api.onrender.com/user", {headers:{
      "Authorization": `Bearer ${user.token}`
    }})
    .then(
      (res) => {
        setUserData(res.data);
      }
    )
    .catch(
      (err) => {alert(err.response.status)}
    )
  }, [])
    return(
      <>
      {
        <>
        user? <Header>
        <GiConverseShoe onClick={() => {navigate("/")}} style={{
                marginLeft: "10px",
                color: "white",
                width: "30px",
                height: "30px"
            }}/>
        <div>
            <AiOutlineUser onClick={() => {navigate("/profile")}} style={{
                color: "white",
                width: "30px",
                height: "30px"
            }}></AiOutlineUser>
            <GiShoppingCart onClick={() => {navigate("/cart")}}  style={{
                color: "white",
                width: "30px",
                height: "30px"
            }}></GiShoppingCart>
        </div>
    </Header>
<SingInContainer>
  <Form onSubmit={handleSubmit}>
    <h1>Alterar dados de cadastro</h1>
    <input  
    placeholder="Nome"
    name="name"
    disabled={!editardados}
    onChange={handleChange}/>

   <input 
   placeholder="Email"
    type="email" 
    name="email"
    disabled={!editardados}
    onChange={handleChange}/>

   <input 
   placeholder="Senha"
    name="password"
    type="password"
    disabled={!editardados}
    onChange={handleChange}
    />
    {
        <button type="submit" onClick={salvarmudançasdados}>Salvar alterações</button>
        
    }
    </Form>
   
  
</SingInContainer>
: <></>
</>
  }
      
    </>
    )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  h1{
    font-size: 60px;
    margin-bottom: 15%;
    margin-top: 5%;
    font-size: 20px;
    font-weight: 600;
    color: #b61c1c;
  }

`
const Form = styled.form`
      button{
        outline: none;
        border: none;
        border-radius: 30px;
        background-color: #b61c1c;
        font-size: 20px;
        font-weight: 600;
        color: #FFFFFF;
        cursor: pointer;
        width: 100%;
        padding: 12px;  
      }
        `

const ListadePedidos = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin: 10px auto;
`


const Pedido = (props) => {
  return(
    <PedidoWrapper>
      <img src={props.imagem}></img>
      <h1>{props.nome}</h1>
      <h2>{props.brand}</h2>
      <h3>{props.valor * props.quantidade}</h3>
      <h4>{props.quantidade}</h4>
    </PedidoWrapper>
  )

}

const PedidoWrapper = styled.div`
width: 200px;
height: 300px;
margin-left: 10px;
margin-right: 10px;
display: flex;
flex-direction: column;
gap: 8px;
img {
    width: 90%;
   
}
h1, h2, h3, h4{
    color: black;
}`

const Header = styled.div`
    width: 100%;
    height: 40px;
    background-color: #b61c1c;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        padding: 10px;
        width: 30%;
        justify-content: space-between;
    }
`

const SearchForm = styled.form`
width: 33%;
height: 80%;
input{
    border-radius: 5px;
    height: 100%;
    width: 100%;
    padding: 2%;
    color: black;
}`

const ProductName = styled.div`
    width: 85%;
    /* background-color: black; */
    color: black;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
`

const ProductInfo = styled.div`
    font-weight: 400;
    font-size: 14px;
    margin-top: 4px;
    color: black;

    span {
        font-weight: 600;
        color: black;
    }
`
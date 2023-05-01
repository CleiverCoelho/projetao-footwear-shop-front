import { useContext, useState, useEffect } from "react"
import UserContext from "../contexts/UserContext2";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function ProfilePage(){
  const [userData, setUserData] = useState({name: "", email: "", password: "", pedidos: [] });
  const [ editardados, setEditarDados] = useState(true);
  const { user, login } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if(!user.token){
    navigate("/sign-in");
  }


  function logout(){
    login({});
    navigate("/");
}




  function handleChange(e) {
  setUserData({ ...userData, [e.target.name]: e.target.value });
}

  function salvarmudançasdados(e){
    e.preventDefault();
    setLoading(true);
    axios.put("users", userData,  {headers:{
      "Authorization": `Bearer ${user.token}`
    }})
    .then(
      (res) => {setUserData(res.data);setEditarDados(true); setLoading(false)}
    )
    .catch(
      //tbm altera editar
      (err) => {alert(err.response.status)}
    )
  }
   
  useEffect(() => {
    axios.get("users", {headers:{
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
    <SingInContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Dados Cadastrais</h1>
        <input  
        name="name"
        value={userData.name}
        disabled={!editardados}
        onChange={handleChange}/>

       <input 
        type="email" 
        name="email"
        value={userData.email}
        disabled={!editardados}
        onChange={handleChange}/>

       <input 
        name="password"
        disabled={!editardados}
        value={userData.password}
        onChange={handleChange}
        />
        {
            editar?
            <button type="submit" onClick={salvarmudançasdados}>Salvar alterações</button>
            :
            <button onClick={() => setEditarDados(true)}>Alterar informações</button>
        }
        </Form>
        <h1>Pedidos</h1>
        <ListadePedidos>
            {
                userData.pedidos.map(
                    (p) => <Pedido imagem={p.imagem} quantidade = {p.quantidade} valor = {p.valor} nome={p.nome} marca={p.brand} />
                )
            }
        </ListadePedidos>

        
      
    </SingInContainer>
    )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  width: 100%;
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
        width: 90%;
      input{
        border-radius: 30px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        width: 100%;
        height: 50px;
      }
      button{
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
}
`

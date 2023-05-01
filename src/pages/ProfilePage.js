import { useContext, useState, useEffect } from "react"


export function ProfilePage(){
  const [userData, setUserData] = useState({name: "", email: "", password: "", rua: "", numero: "", complemento: "", estado: "", cidade: "", pedidos: "" });
  const [ editarendereço, setEditarEndereço] = useState(true);
  const [ editardados, setEditarDados] = useState(true);
  const { auth, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if(!auth.token){
    navigate("/sign-in");
  }


  function logout(){
    login({});
    navigate("/");
}



  function handleChange(e) {
  setUserData({ ...userData, [e.target.name]: e.target.value });
}

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    axios.put("users", userData,  {headers:{
      "Authorization": `Bearer ${auth.token}`
    }})
    .then(
      //alterar editardados e editarendereço, talvez uma funçao maior que retorna outra com parametro e
      (res) => {}
    )
    .catch(
      //tbm altera editar
      (err) => {alert(err.response.status)}
    )
  }
   
  useEffect(() => {
    axios.get("users", {headers:{
      "Authorization": `Bearer ${auth.token}`
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
        <Input  
        name="name"
        value={userData.name}
        disabled={!editardados}
        onChange={handleChange}/>

       <Input 
        type="email" 
        name="email"
        value={userData.email}
        disabled={!editardados}
        onChange={handleChange}/>

       <Input 
        name="password"
        disabled={!editardados}
        value={userData.password}
        onChange={handleChange}
        />
        {
            editar?
            <Button onClick={salvarmudançasdados}>Salvar alterações</Button>
            :
            <Button onClick={() => setEditarDados(true)}>Alterar informações</Button>
        }
        <h1>Endereço</h1>
        <Input  
        name="rua"
        value={userData.rua}
        disabled={!editarendereço}
        onChange={handleChange}
        />
        
        <Input100container>

        <Input25
        name="numero"
        value={userData.numero}
        disabled={!editarendereço}
        onChange={handleChange}/>

       <Input75
        name="complemento"
        value={userData.complemento}
        disabled={!editarendereço}
        onChange={handleChange}/>
        
        </Input100container>

       <Input 
        name="cidade"
        value={userData.cidade}
        disabled={!editarendereço}
        onChange={handleChange}/>

      <Input 
        name="estado"
        value={userData.estado}
        disabled={!editarendereço}
        onChange={handleChange}/>
        {
            editar?
            <Button onClick={salvarmudançasendereço}>Salvar alterações</Button>
            :
            <Button onClick={() => setEditarEndereço(false)}>Alterar informações</Button>
        }
        <h1>Pedidos</h1>
        <ListadePedidos>
            {
                pedidos.map(
                    (p) => <Pedido imagem={p.imagem} quantidade = {p.quantidade} valor = {p.valor} nome={p.nome} marca={p.brand} />
                )
            }
        </ListadePedidos>

        
      </Form>
    </SingInContainer>
    )
}

const SingInContainer = styled.section`
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

const Input25 = styled.input`
   width: 24%;
`

const Input75 = styled.input`
width: 74%
`

const Input100container = styled.div`
width: 100%;
display: flex;
gap: 2%`

const ListadePedidos = styled.div`

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
  
`

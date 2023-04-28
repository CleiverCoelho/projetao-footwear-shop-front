
/*
export function ProfilePage(){
    return(
    <SingInContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Dados Cadastrais</h1>
        <Input  
        name="name"
        value={userData.name}
        disabled={editardados}/>

       <Input 
        type="email" 
        name="email"
        value={userData.email}
        disabled={editardados}/>

       <Input 
        name="password"
        disabled={editardados}
        value={userData.password}
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
        disabled={editarendereço}/>

       <Input25
        name="numero"
        value={userData.numero}
        disabled={editarendereço}/>

       <Input75
        name="complemento"
        value={userData.complemento}
        disabled={editarendereço}/>

       <Input 
        name="cidade"
        value={userData.cidade}
        disabled={editarendereço}/>

      <Input 
        name="estado"
        value={userData.estado}
        disabled={editarendereço}/>
        {
            editar?
            <Button onClick={salvarmudançasendereço}>Salvar alterações</Button>
            :
            <Button onClick={() => setEditarEndereço(true)}>Alterar informações</Button>
        }
        <h1>Pedidos</h1>
        <ListadePedidos>
            {
                pedidos.map(
                    (p) => <Pedido imagem={p.imagem} quantidade = {p.quantidade} valor = {p.valor} nome={p.nome} />
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

*/
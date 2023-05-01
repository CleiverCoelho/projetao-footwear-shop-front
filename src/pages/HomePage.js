<<<<<<< HEAD
// import styled from "styled-components"
// import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
// import {GiConverseShoe, GiShoppingCart} from "react-icons/gi"


// export default function HomePage () {

//     const [produtos, setProdutos] = useState([]);
//     const { auth } = useContext(AuthContext);

//     useEffect(() => {
//         axios.get("/produtos", {headers:{
//             "Authorization": `Bearer ${auth.token}`
//           }})
//         .then(
//             (res) => {setProdutos(res.data)}
//         )
//         .catch(
//             (err) => {alert(err.response.status)}
//         )
//     }, [])

//     function getProductsbybrand(e){
//         let brand = e.target.id;
//         axios.get(`/produtos/${brand}`, {headers:{
//             "Authorization": `Bearer ${auth.token}`
//           }})
//           .then(
//             (res) => {setProdutos(res.data)}
//           )
//           .catch(
//             (err) => {alert(err.response.status)}
//         )
//     }

//     return (
//         <>
//         <Header>
//             <GiConverseShoe style={{
//                     marginLeft: "10px",
//                     color: "white",
//                     width: "30px",
//                     height: "30px"
//                 }}/>
//             <div>
//                 <AiOutlineHeart style={{
//                     color: "white",
//                     width: "30px",
//                     height: "30px"
//                 }}></AiOutlineHeart>
//                 <AiOutlineUser style={{
//                     color: "white",
//                     width: "30px",
//                     height: "30px"
//                 }}></AiOutlineUser>
//                 <GiShoppingCart style={{
//                     color: "white",
//                     width: "30px",
//                     height: "30px"
//                 }}></GiShoppingCart>
//             </div>
//         </Header>
//         <Banner />
//         <Homeh1>Mais vendidos</Homeh1>
//         <ProductsContainer>
//             {produtos.map(
//                 (p) => <Produto imagem={p.image} nome={p.name} valor={p.valor} />
//             )}
//         </ProductsContainer>
//         <Footer onClick={getProductsbybrand} />
//         </>

//     )
// }

// const Header = styled.div`
//     width: 100%;
//     height: 20px;

//     margin-top: 15px;
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     div {
//         display: flex;
//         align-items: center;
//         padding: 10px;
//         width: 30%;
//         justify-content: space-between;

//     }
// `

// const Banner = styled.img``

// const Homeh1 = styled.h1`
// `

// const ProductsContainer = styled.div`
// width: 100%;
// display: flex;
// gap: 2%;
// flex-wrap: wrap;

// `

// const Produto = (props) => {

//     return(
//         <ProdutoWrapper>
//             <img src={props.imagem} />
//             <h1>{props.nome}</h1>
//             <h1>{props.valor}</h1>
//         </ProdutoWrapper>
//     )
// }

// const ProdutoWrapper = styled.div`

// `
=======
import styled from "styled-components";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {GiConverseShoe, GiShoppingCart} from "react-icons/gi"
import { useEffect, useState , useContext} from "react";
import axios from "axios";
import banner from "../assets/banner.png";
import fotoTemplate from "./foto_template.jpg";
import UserContext from "../contexts/UserContext2";
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"


export default function HomePage () {

    const [produtos, setProdutos] = useState([{image:{fotoTemplate}, name:"produto", valor:"199,99", color:"preto e branco"},
    {image:{fotoTemplate}, name:"produto", valor:"199,99", color:"preto e branco"},
    {image:{fotoTemplate}, name:"produto", valor:"199,99", color:"preto e branco"},
    {image:{fotoTemplate}, name:"produto", valor:"199,99", color:"preto e branco"}, {image:{fotoTemplate}, name:"produto", valor:"199,99", color: "azul"}]);
    const { user } = useContext(UserContext);

    const [marca, setMarca] = useState("brand1");
    const [busca, setBusca] = useState("");

    function definirbusca(e){
        setBusca(e.target.value);
    }

    function buscar(e){
        e.preventDefault()
    }

    
    function buscar(e){
        e.preventDefault();
        axios.get("/produtos/name", {busca}, {headers:{
          "Authorization": `Bearer ${user.token}`
       }})
       .then(
        (res) => {setProdutos(res.data);}
       )
       .catch(
           (err) => {alert(err.response.status)}
        )
    }
    

    //useEffect(() => {
   //    axios.get("/produtos", {headers:{
    //        "Authorization": `Bearer ${user.token}`
   //       }})
   //    .then(
   //         (res) => {setProdutos(res.data)}
   //     )
   //     .catch(
   //         (err) => {alert(err.response.status)}
   //     )
   // }, [])

   function getProductsbybrand(e){
      axios.get(`/produtos/${marca}`, {headers:{
          "Authorization": `Bearer ${user.token}`
        }})
        .then(
           (res) => {setProdutos(res.data)}
          )
         .catch(
           (err) => {alert(err.response.status)}
       )
    }

    return (
        <>
                
        <Header>
            <GiConverseShoe style={{
                    marginLeft: "10px",
                    color: "white",
                    width: "30px",
                    height: "30px"
                }}/>
            <SearchForm onSubmit={buscar}>
                <input onChange={definirbusca} />
           </SearchForm>
            <div>
                <AiOutlineUser style={{
                    color: "white",
                    width: "30px",
                    height: "30px"
                }}></AiOutlineUser>
                <GiShoppingCart style={{
                    color: "white",
                    width: "30px",
                    height: "30px"
                }}></GiShoppingCart>
            </div>
        </Header>

        <HomeContent>

        <Banner>
            <img src={banner}/>
        </Banner>
        <ProductsContainer>
            {produtos.map(
                (p) => 
                <Produto>
                <img src={p.image}></img>
                <DivisionLine></DivisionLine>
                <h1>{p.name}</h1>
                <DivisionLine></DivisionLine>
                <h1>{p.valor}</h1>
                <DivisionLine></DivisionLine>
                </Produto>
            )}
        </ProductsContainer>

        </HomeContent>
        <Footer>
            <img onClick={() => {setMarca("brand1")}} src={brand1}></img>
            <img onClick={() => {setMarca("brand2")}} src={brand2}></img>
            <img onClick={() => {setMarca("brand3")}} src={brand3}></img>
        </Footer>

        </>

    )
}


const HomeContent = styled.main`
width: 100%;
color: white;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 80px;

`

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
const Banner = styled.div`
 background-image: url(${banner});
  background-size: cover;
  background-position: center center;
  img{
    width: 100% ;
    margin: 0 auto;
  }
  `

const ProductsContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: 10px auto;

`

const Produto = styled.div`
width: 200px;
height: 300px;
margin-left: 10px;
margin-right: 10px;
img {
    width: 90%;
   
}
h1{
    color: black;
}
`

const DivisionLine = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.2);
`


const Footer = styled.footer`
display: flex;
height: 30px;
width: 100%;
position: fixed;
bottom: 0px;
gap: 20%;
padding: 3%;
background: white;

img{
    height: 100%;
    width: 18%;
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
}
`

>>>>>>> 3eea0f83127cb016f7f456399273672fbdb13139

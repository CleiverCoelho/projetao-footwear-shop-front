import styled from "styled-components";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {GiConverseShoe, GiShoppingCart} from "react-icons/gi"
import { useEffect, useState , useContext} from "react";

import banner from "../assets/banner.png";
import fotoTemplate from "./foto_template.jpg";
import { UserContext } from "../contexts/UserContext";


export default function HomePage () {

    const [produtos, setProdutos] = useState([{image:{fotoTemplate}, name:"produto", valor:"199,99", color:"preto e branco"},
    {image:{fotoTemplate}, name:"produto", valor:"199,99", color:"preto e branco"},
    {image:{fotoTemplate}, name:"produto", valor:"199,99", color:"preto e branco"},
    {image:{fotoTemplate}, name:"produto", valor:"199,99", color:"preto e branco"}, {image:{fotoTemplate}, name:"produto", valor:"199,99", color: "azul"}]);
    //const { user } = useContext(UserContext);

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

   // function getProductsbybrand(e){
    //    let brand = e.target.id;
    //    axios.get(`/produtos/${brand}`, {headers:{
     //       "Authorization": `Bearer ${user.token}`
     //     }})
     //     .then(
     //       (res) => {setProdutos(res.data)}
     //     )
     //     .catch(
     //       (err) => {alert(err.response.status)}
     //   )
    //}

    return (
        <>
                
        <Header>
            <GiConverseShoe style={{
                    marginLeft: "10px",
                    color: "white",
                    width: "30px",
                    height: "30px"
                }}/>
            <div>
                <AiOutlineHeart style={{
                    color: "white",
                    width: "30px",
                    height: "30px"
                }}></AiOutlineHeart>
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
                <img src={fotoTemplate}></img>
                <DivisionLine></DivisionLine>
                <h1>{p.name}</h1>
                <DivisionLine></DivisionLine>
                <h1>{p.valor}</h1>
                <DivisionLine></DivisionLine>
                </Produto>
            )}
        </ProductsContainer>

        </HomeContent>

        </>

    )
}


const HomeContent = styled.main`
width: 100%;
color: white;
display: flex;
flex-direction: column;
align-items: center;


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


const ProdutoWrapper = styled.div`

`
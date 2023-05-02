import styled from "styled-components";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {GiConverseShoe, GiShoppingCart} from "react-icons/gi"
import { useEffect, useState , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.png";
import fotoTemplate from "./foto_template.jpg";
import UserContext from "../contexts/UserContext";
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"


export default function HomePage () {

    const [produtos, setProdutos] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [marca, setMarca] = useState("brand1");
    const [busca, setBusca] = useState("");

    function definirbusca(e){
        setBusca(e.target.value);
    }

    

    
    function buscar(e){
        e.preventDefault();
        axios.get("http://localhost:5000/products", {name: busca})
       .then(
        (res) => {setProdutos(res.data);}
       )
       .catch(
           (err) => {alert(err.response.status)}
        )
    }
    

    useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(
          (res) => {setProdutos(res.data)}
       )
       .catch(
            (err) => {alert(err.response.status)}
        )
   }, [])

   useEffect(() =>
      {axios.get(`http://localhost:5000/products/${marca}`)
        .then(
           (res) => {setProdutos(res.data)}
          )
         .catch(
           (err) => {alert(err.response.status)}
       )}
   , [marca])

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
                <AiOutlineUser onClick={() => {navigate("/sign-up")}} style={{
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
}`
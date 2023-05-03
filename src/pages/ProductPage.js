
import {AiOutlineClose, AiOutlineHeart} from "react-icons/ai"
import { GiShoppingCart } from "react-icons/gi"
import styled from "styled-components"
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function ProductPage () {

    const {id} = useParams();
    // const id = "645141c33b9a873d8796e3c4"
    const [product, setProduct] = React.useState();
    
    const [productSize, setProductSize] = React.useState();
    const navigate = useNavigate();

    // pegar id do produto por parametro e realizar requisicao

    useEffect ( () => {
        // const {id} = useParams();
        console.log(id)
        axios.get(`http://localhost:5000/product/${id}`)
        .then((res) => {
            console.log(res);
            setProduct(res.data);
            
          // ((res.data));
        })
        .catch((err) => {
            console.log(err.response)
          alert(err.response);
        })
    
    }, [id]);

    if(product === undefined) return <>Loading</>

    function toggleSelectSize(){
        if(productSize){
            setProductSize(0);
        }
    }

 //   function goToLastPage (){
   //     navigate(`/${from === "home" ? "" : from}`);
    //}

    function addItemOnCart(){

        if(!productSize) return alert("selecione um tamanho")

        const config = {
            headers: { "Authorization": `Bearer 98da1cb0-3dc9-4e32-82cb-05ce8e6e8a4c`}
          }
      
        const body = {size: productSize}
        axios.post(`http://localhost:5000/cart/${id}`, body, config)
        .then((res) => {
            console.log(res); 
            alert("item adicionado no carrinho!")           
          // ((res.data));
        })
        .catch((err) => {
            console.log(err.response)
          alert(err.response);
        })
    

    }

    function goToCart(){
        navigate('/cart')
    }

    return (

        <ProductContainer>
            <Header>
                <AiOutlineClose onClick={() => {navigate("/")}} style={{
                        marginLeft: "10px",
                        color: "white",
                        width: "30px",
                        height: "30px"
                    }} />
                <div>
                    <AiOutlineHeart style={{
                        color: "white",
                        width: "30px",
                        height: "30px"
                    }}></AiOutlineHeart>
                    <GiShoppingCart 
                        onClick={goToCart}
                        style={{
                        color: "white",
                        width: "30px",
                        height: "30px"
                    }}></GiShoppingCart>
                </div>
            </Header>
            <ProductInfo>
                <img src={product.img} alt="produto"></img>
                {/* <DivisionLine></DivisionLine> */}
                <ProductName>{product.name}</ProductName>
                <DivisionLine></DivisionLine>
                <ProductName>Cor: {product.color}</ProductName>
                <DivisionLine></DivisionLine>
                <ProductName onClick={toggleSelectSize}>{productSize ?  `Tamanho: ${productSize}` : "Selecione o Tamanho" }</ProductName>
                { !productSize &&
                    <ListSizes>
                        <div onClick={() => setProductSize(35)}><p>35</p></div>
                        <div onClick={() => setProductSize(36)}><p>36</p></div>
                        <div onClick={() => setProductSize(37)}><p>37</p></div>
                        <div onClick={() => setProductSize(38)}><p>38</p></div>
                        <div onClick={() => setProductSize(39)}><p>39</p></div>
                        <div onClick={() => setProductSize(40)}><p>40</p></div>
                        <div onClick={() => setProductSize(41)}><p>41</p></div>
                        <div onClick={() => setProductSize(42)}><p>42</p></div>
                    </ListSizes> }
                <DivisionLine></DivisionLine>
                <ProductPrice>R$ {(product.price * 0.93).toFixed(2)} <span>no pix</span> <br/><span>ou R$ R$ {product.price.toFixed(2)} em até 5x sem juros</span></ProductPrice>
                <Footer onClick={addItemOnCart}>
                    COMPRAR
                </Footer>

            </ProductInfo>

        </ProductContainer>
    )
}

const ListSizes = styled.div`
    width: 90%;
    height: 100px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    div {
        margin-right: 5px;
        width: 40px;
        border-radius: 5px;
        height: 40px;
        border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            color: white;
            font-size: 12px;
            font-weight: 400;
        }
    }
`
const Input = styled.input``
const Footer = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    font-weight: 400;

    position: fixed;
    left: 0;
    bottom: 0;

    font-size: 24px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b61c1c;
    border: none;
    z-index: 2;
`

const ProductPrice = styled.div`
    width: 90%;
    height: 100px;
    font-weight: 700;
    font-size: 28px;
    margin-left: 10px;
    color: white;
    margin-top: 20px;
    margin-bottom: 50px;
    span {
        font-size: 16px;
    }
`

const ProductName = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: white;
    margin-left: 10px;
    margin-top: 20px;
`

const DivisionLine = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.5);
`

const ProductInfo = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
    /* margin-bottom: 90px; */
    img {
        width: 100%;
        height: 300px;
    }
`

const ProductContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #b61c1c;
`

const Header = styled.div`
    width: 100%;
    height: 50px;

    position: fixed;
    z-index: 1;
    background-color: #b61c1c;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        padding: 10px;
        width: 75px;
        justify-content: space-between;

    }
`
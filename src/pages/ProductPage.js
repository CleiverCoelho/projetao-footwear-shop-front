
import {AiOutlineClose, AiOutlineHeart} from "react-icons/ai"
import { GiShoppingCart } from "react-icons/gi"
import styled from "styled-components"
import fotoTemplate from "./foto_template.jpg"
import React from "react";


export default function ProductPage () {

    const [productSize, setProductSize] = React.useState();
    const [sizeSelected, setSizeSelected] = React.useState(false);

    // pegar id do produto por parametro e realizar requisicao

    function toggleSelectSize(){
        if(productSize){
            setProductSize(0);
        }
    }

    return (

        <ProductContainer>
            <Header>
                <AiOutlineClose style={{
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
                    <GiShoppingCart style={{
                        color: "white",
                        width: "30px",
                        height: "30px"
                    }}></GiShoppingCart>
                </div>
            </Header>
            <ProductInfo>
                <img src={fotoTemplate}></img>
                <DivisionLine></DivisionLine>
                <ProductName>Tenis Adidas Casual</ProductName>
                <DivisionLine></DivisionLine>
                <ProductName>Cor: Preto e Branco</ProductName>
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
                <ProductPrice>R$ 227,99 <span>no pix</span> <br/><span>ou R$ R$ 239,99 em até 5x sem juros</span></ProductPrice>

            </ProductInfo>
            <Footer>
                COMPRAR
            </Footer>

        </ProductContainer>
    )
}

const ListSizes = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 10px;
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

const Footer = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: -1;
    left: 0;
    z-index: 2;
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b61c1c;
    border: none;
`

const ProductPrice = styled.div`
    width: 100%;
    height: 100px;
    font-weight: 700;
    font-size: 28px;
    color: white;
    margin-top: 20px;
    span {
        font-size: 16px;
    }
`

const ProductName = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: white;
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
    /* margin-bottom: 90px; */
`

const Header = styled.div`
    width: 100%;
    height: 20px;

    margin-top: 15px;
    /* margin-bottom: 60000px; */
    position: absolute;
    z-index: 1;
    background-color: #b61c1c;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    div {
        display: flex;
        align-items: center;
        padding: 10px;
        width: 75px;
        justify-content: space-between;

    }
`
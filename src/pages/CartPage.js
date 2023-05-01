import styled from "styled-components"
import api from "../services/api";
import {AiOutlineHeart, AiOutlineUser, AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"
import fotoTemplate from "./foto_template.jpg"
import React from "react";
import { Link } from "react-router-dom";

export default function CartPage () {
        
    return (
        <CartPageContainer>
            <Header>
                <h2>Carrinho</h2>
            </Header>

            <ProductsContainer>

                <Item id={1}></Item>
                <Item id={2}></Item>

            </ProductsContainer>

            <Footer>
                <CartInfos>
                    <div>
                        Subtotal (2 itens)
                    </div>
                    <div>
                        <span>
                            R$ 299,90
                        </span>
                    </div>
                </CartInfos>
                <DivisionLine></DivisionLine>
                <Buy>
                    <div>
                        Finalizar Compra               
                    </div>
                </Buy>
            </Footer>
        </CartPageContainer>
        
    )
}

function Item ({id}) {

    const [idItem, setIdItem] = React.useState(id)
    const [productQuantity, setProductQuantity] = React.useState(1);

    // console.log(id);
    return (
            <ItemContainer>
                <Link to={`/product/${idItem}/cart`}>
                    <ProductInfoContainer>
                        <img src={fotoTemplate}></img>
                        <div>
                            <ProductName>Tenis Adidas Casual</ProductName>
                            <ProductInfo>Vendido e entregue por FootwearShop</ProductInfo>
                            <ProductInfo><span>Tamanho:</span> 40</ProductInfo>
                            <ProductInfo><span>Cor:</span> Preto+Branco</ProductInfo>
                        </div>
                    </ProductInfoContainer>
                </Link>
                    <DivisionLine></DivisionLine>
                    <PriceInfoContainer>
                        <QuantityContainer>
                            <AiOutlineMinusCircle onClick={() => setProductQuantity(productQuantity - 1)}></AiOutlineMinusCircle>
                            {productQuantity}
                            <AiOutlinePlusCircle onClick={() => setProductQuantity(productQuantity + 1)}></AiOutlinePlusCircle>
                        </QuantityContainer>
                        <PriceInfo>
                            R$ 299,00 ou <br/>R$ 284,00 no pix
                        </PriceInfo>
                    </PriceInfoContainer>
                </ItemContainer>
        
    )
}
const Buy = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        margin-top: 20px;
        text-align: center;
        width: 80%;
        background-color: #b61c1c;
        font-weight: 600;
        color: black;
        font-size: 26px;
        border-radius: 5px;
        color: white;
    }
`

const CartInfos = styled.div`
    font-weight: 500;
    width: 90%;
    height: 20px;
    font-size: 18px;
    color: black;
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        font-weight: 600;
        color: black;
    }
`

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    z-index: 1;
    background-color: white;
`

const PriceInfoContainer = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const QuantityContainer = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 400;
    font-size: 25px;
`
const PriceInfo = styled.div`
    margin-left: 10px;
    width: 70%;
    font-weight: 700;
    font-size: 18px;
`

const CartPageContainer = styled.div`
    width: 100%;
    height: 900px;
    background-color: #b61c1c;
`
const ProductInfoContainer = styled.div`
    img{
        width: 110px;
        height: 90px;
    }
    div {
        margin-left: 10px;
    }

    display: flex;
`
const DivisionLine = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 2px;
    background-color: rgba(1, 1, 10, 0.1);
`

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
const Header = styled.div`
    width: 100%;
    height: 40px;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    font-weight: 700;
    font-size: 28px;
    padding: 20px;
    color: white;
    background-color: #b61c1c;
`
const ProductsContainer = styled.div`
    width: 100%;
    height: 900px;

    display: flex;
    flex-direction: column;
    margin-top: 60px;
    /* padding: 20px; */
`
const ItemContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    height: 180px;
    padding: 10px;
    margin-top: 20px;
    /* background-color: black; */
`
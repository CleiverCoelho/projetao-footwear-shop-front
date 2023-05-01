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

            </ProductsContainer>
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

const PriceInfoContainer = styled.div`
    width: 400px;
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
    width: 180px;
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
    height: 60px;
    position: absolute;
    left: 22px;
    top: 20px;
    font-weight: 700;
    font-size: 28px;
    color: white;
    /* background-color: white; */
`



const ProductsContainer = styled.div`
    width: 100%;
    height: 900px;

    display: flex;
    flex-direction: column;
    margin-top: 50px;
`
const ItemContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    height: 180px;
    padding: 10px;
    margin-top: 20px;
`
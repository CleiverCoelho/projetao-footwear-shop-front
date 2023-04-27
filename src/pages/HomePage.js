import styled from "styled-components"
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {GiConverseShoe, GiShoppingCart} from "react-icons/gi"


export default function HomePage () {
    return (
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
    )
}

const Header = styled.div`
    width: 100%;
    height: 20px;

    margin-top: 15px;
    position: absolute;
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
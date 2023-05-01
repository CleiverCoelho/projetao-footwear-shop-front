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
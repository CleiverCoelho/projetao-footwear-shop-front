import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UserProvider from "./contexts/UserContext";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AddressPage from "./pages/AddressPage";


export default function App() {

  return (
    <PagesContainer>
      
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/address" element={<AddressPage/>} />
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  width: 100%;
  height: 100%;
`
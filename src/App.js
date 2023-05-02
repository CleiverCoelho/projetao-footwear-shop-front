import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { UserProvider }  from "./contexts/UserContext";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AddressPage from "./pages/AddressPage";
import { ProfilePage } from "./pages/ProfilePage";
import GlobalStyle from "./style/GlobalStyle"
import ResetStyle from "./style/ResetStyle"

export default function App() {

  return (
    <>
     <ResetStyle />
    <GlobalStyle />
    <UserProvider>
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id/:from" element={<ProductPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>

      </BrowserRouter>
    </PagesContainer>
    </UserProvider>
    </>
  )
}

const PagesContainer = styled.main`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`
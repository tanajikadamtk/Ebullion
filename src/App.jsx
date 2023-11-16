// import React from "react";
import "./App.scss";
// import ProductCard from './components/product/productCard';
import { Header } from "./components/Header/header";
import Footer from "./components/Footer/footer";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AddToCart from "./Pages/AddToCart/AddToCart";
import WishList from "./Pages/WishList/WishList";
import SelectionEmpty from "./Pages/SelectionEmpty/SelectionEmpty";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Checkout from "./Pages/Checkout/Checkout";
import Profile from "./Pages/Profile/Profile";
import SignedIn from "./components/SIgnedIn/SignedIn";
import NotSignedIn from "./components/NotSignedIn/NotSignedIn";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <LoginPage />
      <ProductDetails />
      <AddToCart />
      <WishList />
      <SelectionEmpty />
      <PageNotFound />
      <Checkout />
      <Profile />
      <SearchBox />
      <SignedIn />
      <NotSignedIn />
      <Footer />
    </div>
  );
};

export default App;

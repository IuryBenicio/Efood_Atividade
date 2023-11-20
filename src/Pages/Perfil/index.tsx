import HeaderCart from "../../Components/Header/HeaderCart";
import { useState } from 'react';
import Itens from "../../Containers/Itens";
import Footer from "../../Components/Footer";
import BannerMenu from "../../Components/BannerPerfil";

function Perfil(){
  const[cart, setCart] = useState(0)

  return(
    <>
      <HeaderCart Cart={cart} />
        <BannerMenu/>
        <Itens/>
      <Footer/>
    </>
  )
}

export default Perfil

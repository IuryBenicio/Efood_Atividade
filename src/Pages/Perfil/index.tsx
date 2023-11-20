import HeaderCart from "../../Components/Header/HeaderCart";
import Itens from "../../Containers/Itens";
import Footer from "../../Components/Footer";
import BannerMenu from "../../Components/BannerPerfil";

function Perfil(){

  return(
    <>
      <HeaderCart />
        <BannerMenu/>
        <Itens/>
      <Footer/>
    </>
  )
}

export default Perfil

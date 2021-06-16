import {AiOutlineBars} from "react-icons/ai";
import {TiTicket} from "react-icons/ti";
import {BiTimeFive} from "react-icons/bi";
import {RiStore2Line} from "react-icons/ri";
import {GiClothes} from "react-icons/gi";
import {AiOutlineTag} from "react-icons/ai";
import {IoIosHelpCircleOutline} from "react-icons/io";

import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";
import car6 from "../assets/car6.png";

export const totalCards = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car6,
  car6,
  car6,
  car6,
  car6,
  car6,
  car6,
  car6,
];

export const Url = {
  mercadolibreHome: "https://www.mercadolibre.com.ar/#from=homecom",
  mediosDepago:
    "https://articulo.mercadolibre.com.ar/noindex/services/MLA741093357/payments?controlled=true",
  conoceMas:
    "https://articulo.mercadolibre.com.ar/noindex/freeReturn/fashion?itemId=MLA741093357&quantity=1&new_version=true&modal=false&controlled=true",
  formasDeEntraga:
    "https://www.mercadolibre.com.ar/gz/shipping-selector?noIndex=true&item_id=MLA741093357&informative=true&page_context=vpp&location=true&quantity=1&can_go_cart_checkout=true&calculator_experiment=true&controlled=true",
  ofertas: "https://www.mercadolibre.com.ar/ofertas#nav-header",
  historial: "https://www.mercadolibre.com.ar/gz/home/navigation#nav-header",
  supermercado: "Supermercado en Mercado Libre Argentina",
  moda: "https://www.mercadolibre.com.ar/c/ropa-y-accesorios#nav-header",
  login:
    "https://www.mercadolibre.com/jms/mla/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fpublicar&loginType=sell#nav-header",
  ayuda: "https://www.mercadolibre.com.ar/ayuda#nav-header",
};

export const options = [
  {
    option: "Categorias",
    url: "",
    icon: AiOutlineBars,
  },
  {
    option: "Ofertas",
    url: Url.ofertas,
    icon: TiTicket,
  },
  {
    option: "Historial",
    url: Url.historial,
    icon: BiTimeFive,
  },
  {
    option: "Supermercado",
    url: Url.supermercado,
    icon: RiStore2Line,
  },
  {
    option: "Moda",
    url: Url.moda,
    icon: GiClothes,
  },
  {
    option: "Vender",
    url: Url.login,
    icon: AiOutlineTag,
  },
  {
    option: "Ayuda",
    url: Url.ayuda,
    icon: IoIosHelpCircleOutline,
  },
];

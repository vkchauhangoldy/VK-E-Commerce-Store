import { useContext } from "react"
import CartContext from "../context/Cart/CartContext"

const useCart = ()=>{
    return useContext(CartContext);
}

export default useCart;
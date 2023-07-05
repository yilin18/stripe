import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount,
} from './cart-icon.styles.jsx'
import {CartContext} from '../../contexts/cart.context'
import { useContext } from "react";

const CartIcon = function(){
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    const toggle = () => setIsCartOpen(!isCartOpen)

    return(
        <CartIconContainer onClick={toggle}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon
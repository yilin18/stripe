import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from './cart-dropdown.styles'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropDown = () =>{

    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutHandler = () => {
        navigate('checkout')
    }

    return(
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? 
                    (cartItems.map((cartItem)=>(
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    ))) : (
                        <EmptyMessage>Your Cart is Empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick = {goToCheckoutHandler}>Go To Check</Button> 
        </CartDropdownContainer>
    )
}

export default CartDropDown
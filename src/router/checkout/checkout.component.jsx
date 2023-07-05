import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import CheckoutItem from '../../component/checkout-item/checkout-item.component'


const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartContext)

    return(
        <div className='checkout-container'>
            <h1>I am the checkout Page</h1>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {cartItems.map((cartItem)=>{
                    return(
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })}
            </div>
            <span className='total'>$ {cartTotal}</span>
        </div>
    )
}

export default Checkout
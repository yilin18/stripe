import './product-card.styles.scss'
import Button, {BUTTOON_TYPE_CLASSES} from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const {addItemToCart} = useContext(CartContext)

    const addProductCart = () => addItemToCart(product)

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTOON_TYPE_CLASSES.inverted} onClick={addProductCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard

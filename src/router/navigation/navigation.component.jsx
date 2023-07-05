import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropDown from "../../component/cart-dropdown/cart-dropdown.component";
import {CartContext} from '../../contexts/cart.context'

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles'

const Navigation = ()=>{
    const {currentUser} = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
    }
    const {isCartOpen} = useContext(CartContext)
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crownlogo/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as = 'span' onClick={signOutHandler}>SIGN OUT</NavLink>
                    ) : (
                    <NavLink className="nav-link" to='auth'>
                        SIGN IN
                    </NavLink>
                    )}
                <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropDown/>}    
            </NavigationContainer>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation
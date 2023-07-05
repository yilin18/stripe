import {BaseButton, GoogleSignInButton, InvertedButton} from './button.styles'

export const BUTTOON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTOON_TYPE_CLASSES.base) => {
    return {
        [BUTTOON_TYPE_CLASSES.base] : BaseButton,
        [BUTTOON_TYPE_CLASSES.google] : GoogleSignInButton,
        [BUTTOON_TYPE_CLASSES.inverted] : InvertedButton,
    }[buttonType]
}

const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType)
    return(
        <CustomButton
            {...otherProps}
        >
            {children}
        </CustomButton>
    )
}

export default Button
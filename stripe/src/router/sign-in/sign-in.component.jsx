import { async } from "@firebase/util"
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth, 
} from "../../utils/firebase/firebase.utils"

const SignIn = ()=>{
    const logGoogleUser = async() =>{
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>sign-in</h1>
            <button onClick={logGoogleUser}>Sign In With Google Account</button>
        </div>
    )
}

export default SignIn
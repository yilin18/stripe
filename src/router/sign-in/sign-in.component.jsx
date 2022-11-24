import { async } from "@firebase/util"
import { useEffect } from "react"
import { 
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth, 
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../Component/sign-up-form/sign-up-form.component"

const SignIn = ()=>{


    const logGoogleUser = async() =>{
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>sign-in</h1>
            <button onClick={logGoogleUser}>Sign In With Google Account</button>
            <SignUpForm/>
            <h1>this is an update</h1>
        </div>
    )
}

export default SignIn
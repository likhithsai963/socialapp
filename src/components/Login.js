
import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/loginSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async() =>{
        console.log("i was clicked")
        try {
            const result = await signInWithPopup(auth,provider);
            console.log("User Info:", result.user);
            const user = result.user
            dispatch(addUser({
                email: user.email,
                displayName: user.displayName,
                emailVerified: user.emailVerified,
                uid: user.uid,
                photoURL:user.photoURL
            }));
            if(user.emailVerified){
                console.log("email",user.emailVerified)
                navigate("/home")
            }
        } catch (error) {
            console.error("Login Error:", error.message);
        }

    }
    return (
        <div className="relative md:w-full" >
            <img src="https://cdn.dribbble.com/userupload/3652384/file/original-3c551cd4b4c4b790900045f9c2501d5e.png" alt="logo" className="h-screen w-full md:w-full    object-cover" />
            <div className="absolute bottom-0 w-full h-1/3">
                <img src="https://cdn.dribbble.com/userupload/15522016/file/original-4528fbe998b29334d9a35358b1d6a1a2.png" alt="logo2" className=" w-full  h-full object-cover rounded-lg " />
                <button onClick={handleLogin}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-950 border border-gray-300 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                        alt="Google Icon"
                        className="w-6 h-6 mr-2" />
                    <span className="text-white font-medium">Continue with Google</span>
                </button>
            </div>
        </div>
    )
}

export default Login;
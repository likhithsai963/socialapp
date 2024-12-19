import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Home = () => { 
    const navigate = useNavigate();
    const name = useSelector((store) => store.user.user.displayName)
    const photo = useSelector((store) => store.user.user.photoURL)
    console.log(name)
    const handleClick = () =>{
        navigate("/create")
    }
    return (
        <>
            <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                    <img src={photo} alt="photourl" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                    <p className="text-gray-600 text-sm">Welcome Back</p>
                    <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                </div>
                <div className="fixed bottom-0 right-6 bg-black p-4 rounded-full" onClick={handleClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Home
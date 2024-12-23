import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const name = useSelector((store) => store.user.user.displayName)
    const photo = useSelector((store) => store.user.user.photoURL)
    console.log(name)
    const handleClick = () => {
        navigate("/create")
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://dummyapi.online/api/social-profiles');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);
    return (
        <>
            <div className="flex-col items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
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
                <div className="container mx-auto p-4">
                    {posts.length === 0 ? (
                        <p>Loading posts...</p>
                    ) : (
                        posts.map((post) => (
                            <div key={post.userId} className="bg-white rounded-lg shadow-lg p-4 mb-4">
                                <div className="flex items-center mb-2">
                                    <img
                                        src={post.profilePic}
                                        alt={post.username}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h2 className="font-bold text-lg">{post.fullName || post.username}</h2>
                                        <p className="text-gray-500">{post.location}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-2">{post.bio || 'No bio available.'}</p>
                                <p className="text-sm text-gray-600">Followers: {post.followersCount} | Posts: {post.postsCount}</p>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </>
    )
}
export default Home
import { createSlice } from "@reduxjs/toolkit"
import { db } from "./firebase";
import { getDocs, addDoc, collection } from "firebase/firestore";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const { setPosts, setLoading } = postsSlice.actions
export const fetchPosts = () => async (dispatch) => {
    dispatch(setLoading(true));
    const querySnapshot = await getDocs(collection(db, "posts"));
    const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    dispatch(setPosts(posts));
    dispatch(setLoading(false));
};
export const addPost = (newPost) => async (dispatch) => {
    const docRef = await addDoc(collection(db, "posts"), newPost);
    console.log("New post added with ID:", docRef.id);
    dispatch(fetchPosts()); // Fetch posts again to update the state
};

export default postsSlice.reducer;
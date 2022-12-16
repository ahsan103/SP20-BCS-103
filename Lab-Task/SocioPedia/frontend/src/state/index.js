import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mode:'light',
    user:null,
    token:null,
    posts:[],
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setMode: (state)=>{
            state.mode = state.mode ==='light' ? 'dark' : 'light'
        },
        setLogin:(state , action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout:(state)=>{
            state.user = null
            state.token = null
        },
        setFriend: (state ,action)=>{
            if(state.user){
                state.user.friends = action.payload.friends
            }
        },
        setPosts:(state , action)=>{
            state.posts = action.payload.posts
        },
        setPost:(state,action)=>{
            const updatePost = state.posts.map((post)=>{
                if(postMessage._id === action.payload.post._id){
                    return action.payload.post
                }
                return post
            })
            state.posts = updatePost
        }
    }
})

export const {setMode , setLogin , setLogout , setFriend , setPost , setPosts} = authSlice.actions
export default authSlice.reducer



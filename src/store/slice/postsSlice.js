import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts', 
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch posts')
            }
            return await response.json()
        } catch(error) {
            return rejectWithValue(error.message)
        }
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null
    }, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
})

export const useSelectPosts = (state) => state.posts.posts;
export const userSelectPostsStatus = (state) => state.posts.status;
export const useSelectPostsError = (state) => state.posts.error;

export default postsSlice.reducer; 
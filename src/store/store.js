import { configureStore }from '@reduxjs/toolkit';
import counterReduser from './slice/counterSlice';
import postsReducer from './slice/postsSlice';
import notesReducer from './slice/noteSlice';

export const store = configureStore({
    reducer: {
        counter: counterReduser,
        posts: postsReducer,
        notes: notesReducer,
    }
})
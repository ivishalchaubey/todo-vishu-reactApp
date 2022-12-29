import { createSlice } from "@reduxjs/toolkit";

const initialState = []


export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            state.push({ ...actions.payload })
        },
        removeToDo: (state, actions) => {
            return state.filter((data)=>data.id !== actions.payload)
        }
    }
})

export default TodoSlice.reducer;
export const { addTodo, removeToDo } = TodoSlice.actions; 
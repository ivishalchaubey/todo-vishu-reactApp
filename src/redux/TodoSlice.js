import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTodo: [
    ]
}


export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            state.allTodo.push({ ...actions.payload })
        },
        removeToDo: (state, actions) => {
            
        }
    }
})

export default TodoSlice.reducer;
export const { addTodo, removeToDo } = TodoSlice.actions; 
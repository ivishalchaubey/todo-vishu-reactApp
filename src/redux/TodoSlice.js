import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTodo: [
        { task: "Hello" },
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
            state.allTodo.includes({ ...actions.payload })
            let value = actions.payload;
            allTodo.findIndex((a) => {
                return a == value
            }
            )
        }
    }
})

export default TodoSlice.reducer;
export const { addTodo, removeToDo } = TodoSlice.actions; 
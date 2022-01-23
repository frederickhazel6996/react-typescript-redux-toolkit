import { createSlice } from '@reduxjs/toolkit';
import { getTodos } from '../actions/todo-actions';
import { notyf } from '../../utils/values';

const todoSlice = createSlice({
    name: 'todos',
    initialState: { todos: [] },
    //The reducers here are not async functions
    reducers: {
        addTodo(state, action) {
            console.log(action.payload);
        },
        fetchTodos(state, action) {
            console.log(action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(getTodos.pending, () => {}),
            builder.addCase(getTodos.fulfilled, (state: { todos: any }, action: { payload: any }) => {
                state.todos = action.payload;
                notyf.success('fetched');
            }),
            builder.addCase(getTodos.rejected, (state, action) => {
                notyf.error(action.error.message);
            });
    }
});

export const { addTodo, fetchTodos } = todoSlice.actions;
export default todoSlice.reducer;

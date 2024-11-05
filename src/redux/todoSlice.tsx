import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/Types";

const getTodosFromStorage = () => {
    const todos = localStorage.getItem('todoApp');
    return todos ? JSON.parse(todos) : [];
}

const initialState: TodoInitialState = {
    todos: getTodosFromStorage(),
}

const writeTodosToStorage = (todos:TodoType[]) => {
    localStorage.setItem('todoApp', JSON.stringify(todos));
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]
            writeTodosToStorage(state.todos);
        },
        removeTodoById: (state:TodoInitialState, action:PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo:TodoType) => todo.id != action.payload)]
            writeTodosToStorage(state.todos);
        },
        updateTodoById: (state:TodoInitialState, action:PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo:TodoType) => todo.id != action.payload.id ? todo : action.payload)]
            writeTodosToStorage(state.todos);
        },
        
    }
})

export const { addTodo, removeTodoById, updateTodoById } = todoSlice.actions
export default todoSlice.reducer
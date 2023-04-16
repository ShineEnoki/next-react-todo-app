import React, { createContext, useReducer } from 'react';

const initialTodosState = [
    {
        id: 1,
        taskName: 'Edit နဲ့ Delete feature တွေ ထပ်ထည့်',
        isFinished: false,
    },
    {
        id: 2,
        taskName: 'Todo app မှာ useContext ထည့်သုံးရန်',
        isFinished: false,
    },
    {
        id: 3,
        taskName: 'Mythic rank ရောက်ရန်',
        isFinished: true,
    },
    {
        id: 4,
        taskName: " don't let to add task if the input is empty",
        isFinished: false,
    },
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'addTask':
            return [...state, action.payload];
        case 'changeStatus':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        isFinished: !todo.isFinished
                    };
                } else {
                    return todo;
                }
            });
        case 'changeTask':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        taskName: action.payload.taskName
                    }
                } else {
                    return todo
                }
            });
        case 'deleteTask':
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}

export const TodosStateContext = createContext();
export const TodosDispatchContext = createContext();

export const TodosContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, initialTodosState)
    return (
        <TodosStateContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={dispatch}>
                {children}
            </TodosDispatchContext.Provider>
        </TodosStateContext.Provider>
    )
}

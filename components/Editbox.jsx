import { TodosDispatchContext, TodosStateContext } from '@/context/todosContext';
import React, { useState, useContext } from 'react';


const EditBox = ({ todo, setEditboxId }) => {

    const todosState = useContext(TodosStateContext);
    const todosDispatch = useContext(TodosDispatchContext);

    const [todoValue, setTodoValue] = useState(todo.taskName);

    const handleEditingTodo = (id) => {

        todosDispatch({type: 'changeTask', payload: {id, taskName: todoValue}})

        setEditboxId(null)


    }



    return (
        <div className='flex gap-1'>
            <input
                value={todoValue}
                className="border border-gray-300 rounded-md px-4 py-2 w-400 focus:outline-none focus:border-blue-500"
                onChange={e => setTodoValue(e.target.value)}
            />

            <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setEditboxId(null)}
            >
                Cancel
            </button>

            <button
                className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded"
                onClick={() => handleEditingTodo(todo.id)}
            >
                Save
            </button>

        </div>
    )
}

export default EditBox;
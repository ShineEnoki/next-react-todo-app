
import { TodosDispatchContext, TodosStateContext } from '@/context/todosContext';
import React, { useState, useContext } from 'react'



const AddTodo = () => {

    const todosState = useContext(TodosStateContext);

    const todosDispatch = useContext(TodosDispatchContext)

    const [todoValue, setTodoValue] = useState('');

    let nextId = todosState.length + 1;

    const handleAddTask = () => {
        const payload ={
            id: nextId,
            taskName: todoValue,
            isFinish: false
        }
        todosDispatch({type: 'addTask', payload: payload})
        setTodoValue('')
      }
    return (

        <div className='flex my-2 p-3 justify-center gap-1' >
            <input
                className="border border-gray-300 rounded-md px-4 py-2 w-400 focus:outline-none focus:border-blue-500"
                placeholder="What you have to do"
                type="text"
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
            />
            <button
                //disable if input is empty
                disabled={todoValue.length < 1}
                onClick={handleAddTask}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-700"
            >
                Add task
            </button>
        </div >

    )
}

export default AddTodo
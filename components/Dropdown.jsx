import React, { useState, useContext } from 'react';

//mui icons
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { TodosDispatchContext } from '@/context/todosContext';


//this dropdown will contail some functionality, (Done, Edit and Delete)
const Dropdown = ({ todo, setEditboxId }) => {

    const todosDispatch = useContext(TodosDispatchContext)

    const [showMenu, setShowMenu] = useState(false);



    const onDoneById = (id, isFinished) => {
        todosDispatch({type: 'changeStatus', payload: {id: id}})
        setShowMenu(!showMenu)
    }

    const handleDeleteById = (id) => {
        todosDispatch({type: 'deleteTask', payload: {id}})
        setShowMenu(!showMenu)
    }

    const handleEditById = (id) => {
        setEditboxId(id)
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <div className="relative inline-block text-right">

                <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-2 rounded-lg transform rotate-90" onClick={() => setShowMenu(!showMenu)}>
                    <DragIndicatorIcon />
                </button>

            </div>
            {showMenu && (
                <div className="dropdown absolute z-10 " key={todo.id}>
                    <div className="dropdown-content bg-white border border-gray-200 shadow-md py-1 flex flex-col px-2 rounded-md">
                        <button
                            className="block px-4 py-2 text-bold text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => onDoneById(todo.id, todo.isFinished)}
                        >
                            {todo.isFinished ? 'Unco' : 'Done'}
                        </button>
                        <button
                            className="block px-4 py-2 text-bold text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => handleEditById(todo.id)}
                        >
                            Edit
                        </button>
                        <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => handleDeleteById(todo.id)}
                        > 
                            Delete 
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown
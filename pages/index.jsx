import React,{ useState, useContext} from 'react';

//custom component
import AddTodo from "@/components/AddTodo";
import Dropdown from '@/components/Dropdown';
import EditBox from '@/components/Editbox';


//mui icons
import DoneIcon from '@mui/icons-material/Done';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import EditIcon from '@mui/icons-material/Edit';

const { TodosContextProvider, TodosStateContext, TodosDispatchContext } = require("@/context/todosContext")


const Home = () => {

  const todosStateContext = useContext(TodosStateContext);

  const todosDispatch = useContext(TodosDispatchContext)

  const [editboxId, setEditboxId] = useState(null);
 

  const onDoneById = (id) => {
    todosDispatch({type: 'changeStatus', payload: {id: id}})
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col pt-5'>
        <h6 className='text-xl font-semibold text-center'>
          ဘာကြောင့် စတင်ခဲ့ သလဲ ဆိုတာ မ ‌မေ့ ပါနဲ့
        </h6>

        <AddTodo />
        <div  >
          <ul className='max-w-screen-sm	'>
            {todosStateContext.map(todo => {
              return <li key={todo.id} className='bg-white rounded-lg my-1 px-4 py-3 flex justify-between gap-1'>
                <div className='flex-shrink-0 pt-2'>
                  {todo.isFinished
                    ? <DoneIcon className='text-green-500' onClick={() => onDoneById(todo.id)} />
                    : <RadioButtonUncheckedIcon onClick={() => onDoneById(todo.id)} />
                  }
                </div>

                {/* This section will show main to do content or editable box */}
                <div className='flex-grow text-left px-3 '>

                  {
                    editboxId === todo.id
                      ? <EditBox todo={todo} setEditboxId={setEditboxId} />
                      : <div className='flex justify-between pt-2' >
                        <p className='mr-9'> {todo.taskName} </p>
                        <div className='relative' >
                          <EditIcon className='absolute top-0 right-1 text-[17px]'
                            onClick={() => setEditboxId(todo.id)}
                          />
                        </div>

                      </div>
                  }
                </div>

                <Dropdown
                  todo={todo}
                  setEditboxId={setEditboxId}
                  className='flex-shrink-0'
                />
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>

  )
}


const App = () => {
  return (
    <TodosContextProvider >
      <Home />
    </TodosContextProvider>
  )
}


export default App;

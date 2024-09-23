import { FaCheck, FaTrash,  FaRegSquare } from 'react-icons/fa';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div 
        onClick={() => {toggle(id)}}
        className='flex flex-1 items-center cursor-pointer'>
            {isComplete ? (
        <FaCheck className='bg-orange-600 rounded-full  p-1 text-2xl text-white'/>) : (< FaRegSquare className=' text-xl text-gray-500'/>)}
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
             ${isComplete ? "line-through": ""}` }>
                {text} 
        </p>

      </div>
      <FaTrash
        onClick ={() => {deleteTodo(id)}}
        className='w-3.5 text-gray-500 cursor-pointer'/>
    </div>
  )
}

export default TodoItems

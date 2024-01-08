import React, { useState , useEffect} from "react";
import Popup from "./Popup";
const Home = () => {
  
 

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  // Load todoList from localStorage on component mount
  useEffect(() => {
    try {
      const storedTodoList = JSON.stringify(localStorage.getItem('items')) || [];
      setTodoList(storedTodoList);
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
      
     
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('items', JSON.parse(todoList));
  }, [todoList]);

  const modalToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const addTodo = () => {
    if (todo.trim() !== "" && toggleBtn) {
      setTodoList([...todoList, { id: Date.now(), text: todo }]);
      setTodo("");
    } else if (todo.trim() !== "" && !toggleBtn) {
      setTodoList(todoList.map((items) => {
        if (items.id === isEditItem) {
          return { ...items, text: todo };
        }
        return items;
      }));
    }
    setTodo("");
    setToggleBtn(true);
  };

  const deleteTodo = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  const editTodo = (id) => {
    const editItem = todoList.find((item) => item.id === id);
    setTodo(editItem.text);
    setToggleBtn(false);
    setIsEditItem(id);
  };

  return (
    <>
       
<Popup isOpen={isPopupOpen}  toggle={modalToggle} delete={deleteTodo}/>

    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="flex justify-between">
            <div className="-space-y-px rounded-md shadow-sm w-[70%]">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="text"
                  name="text"
                  type="text"
                  
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter a Task"
                  value={todo}
        onChange={(e) =>{setTodo(e.target.value)}}
                 />
              </div>
               
            </div>

            

            <div>
              <button
                type="button"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={addTodo} >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3" onClick={addTodo}>
                  
                </span>
                {toggleBtn?"Add":"Update"}
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
     
      <div className="px-4 sm:px-6 lg:px-8">
     
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
         
          <tbody className="divide-y divide-gray-200 bg-white">
            {todoList.map((items) => (
              <tr key={items.email}>
                <td className="whitespace-nowrap text-start  py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {items.text}
                </td>
                <td className=" whitespace-nowrap px-3 py-4 text-sm text-white  fit-content sm:table-cell">
                <button className="bg-red-400 p-2 rounded" onClick={()=>{setIsPopupOpen(true)
                deleteTodo(items.id)
                }}>Delete</button>
                </td>
                <td className=" whitespace-nowrap px-3 py-4 text-sm text-white lg:table-cell">
                <button  className="bg-orange-400 p-2 rounded" onClick={()=>editTodo(items.id)}>Edit</button>
                </td>  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {todoList.length>1? <button className="mt-10 bg-red-600 p-2 px-6 rounded-sm text-white" onClick={()=>setTodoList([])}>Clear All</button> : null}
    </>
  );
};

export default Home;
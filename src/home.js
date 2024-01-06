import React, { useRef, useState } from "react";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [toggleBtn,setToggleBtn] = useState(true);
  const [isEditItem,setIsEditItem] = useState(null);
     const ref = useRef();
  const addTodo = () => {
    if (todo.trim() !== "" && toggleBtn) {
      setTodoList([...todoList, { id: Date.now(), text: todo },
      ]);
      setTodo("");
    }
    else if (todo.trim() !== "" && !toggleBtn){

      setTodoList(todoList.map((items)=>{
        if(items.id === isEditItem){
          return  { ...items, text: todo };

                     }
                     return items
       
      }))
    }
  setTodo("");
  setToggleBtn(true);
  };
  const deleteTodo = (id) =>{
     const newList =  todoList.filter((item)=>{
        return item.id !== id;
       })
       setTodoList(newList)
  }
  const editTodo = (id) =>{
      const editItem =  todoList.find((item)=>{
      return   item.id === id
         })
          setTodo(editItem.text);
          setToggleBtn(false)
        setIsEditItem(id);
  }

  return (
    <>
      <input ref={ref}
        type="text"
        value={todo}
        onChange={(e) =>{setTodo(e.target.value);
        console.log(todo)}}
      />
      
      <button onClick={addTodo}>{toggleBtn?"Add":"Update"}</button>
      

      <ul>
        {todoList.map((item) => (
            <>
          <li key={item.id}>{item.text}-----{item.id}</li><span><button onClick={()=>deleteTodo(item.id)}>Delete</button></span><span><button onClick={()=>editTodo(item.id)}>Edit</button></span>
          </>))}
      </ul>
     {todoList.length>0 ? <button onClick={()=>setTodoList([])}>Clear All</button> : null}
    </>
  );
};

export default Home;
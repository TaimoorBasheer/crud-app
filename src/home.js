import React, { useRef, useState } from "react";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
     const ref = useRef();
  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodoList([...todoList, { id: Date.now(), text: todo },
      ]);
      setTodo("");
    }
  };
  const deleteTodo = (id) =>{
     const newList =  todoList.filter((item)=>{
        return item.id !== id;
       })
       setTodoList(newList)
  }
  const editTodo = (id) =>{
         todoList.find((item)=>{
         if(item.id === id){
         ref.current.value = item.text;
         let newtext = ref.current.value;
         item.text = newtext;
         }
         return true;
         })
  }

  return (
    <>
      <input ref={ref}
        type="text"
        value={todo}
        onChange={(e) =>{setTodo(e.target.value);
        console.log(todo)}}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todoList.map((item) => (
            <>
          <li key={item.id}>{item.text}</li><span><button onClick={()=>deleteTodo(item.id)}>Delete</button></span><span><button onClick={()=>editTodo(item.id)}>Edit</button></span>
          </>))}
      </ul>
    </>
  );
};

export default Home;
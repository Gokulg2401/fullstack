import React,{useState,useEffect} from "react";
const Todo=()=>{
  const[todo,setTodo]=useState(null);
  useEffect(()=>{
    fetchTodo=async()=>{
      const res=await fetch("https://dummyjson.com/todos");
      const data=await res.json();
      setTodo(data);
    }
    fetchTodo();

  });
  return(
    <div>
      <p>ID:{todo.id}</p>
      <p>TODO:{todo.todo}</p>
      <p>Status:{todo.completed}</p>
      <p>USerId:{todo.userID}</p>
    </div>
  );
}
export default Todo;
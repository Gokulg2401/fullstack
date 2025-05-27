import React,{useState} from "react";
function Age(){
    const [user,setUser]=useState({name:'Gokul',age:23});
    const updateAge=()=>{
        setUser({...user,age:user.age+1});
    };
    return (
      <div class='obj'>
        <p>{user.name} is {user.age} years old</p>
        <button onClick={updateAge} style={{backgroundColor:'black',color:'white'}}>Increase age</button>
      </div>
    );
}
export default Age;
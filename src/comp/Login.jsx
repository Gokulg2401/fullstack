import React,{useState} from "react";
function Login(){
    const [email,setEmail]=useState("");
    const[pw,setPw]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Email: ",email);
        console.log("Password: ",pw);
    };
    return (
        <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input type="password"
        value={pw}
        onChange={(e)=>setPw(e.target.value)}
        />
        <button type="submit">Login</button>
        </form>
    );
}
export default Login;
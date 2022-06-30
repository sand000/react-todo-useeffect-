import { useEffect } from "react";
import { useState } from "react"

export default function Todo(){

    const [data,setData] = useState([]);

    const getTodos = async ()=>{

        try{
            let data = await fetch(`https://jsonplaceholder.typicode.com/todos?&_page=1&_limit=10`);
            data = await data.json();
            console.log(data);
            setData(data);
        }
        catch(err){
            console.log(err);
        }
    }


    // useEffect
    useEffect(() =>{
        getTodos();
    },[])


    return (
        <div style={{
            padding:"50px",
            gap:"50px"
        }}>
           <h1>Todos</h1>
           <button onClick={getTodos}> Fetch </button>

           <div>
            {
                data.map(todo =>
                    <div style={{display:"flex",
                        gap:"20px"}}>
                        <div>{todo.id}</div>
                        <div>{todo.title}</div>
                        <div>{todo.status ? "Done": "Not done"}</div>
                        
                    </div>
                )
            }
           </div>
        </div>
      )
    }
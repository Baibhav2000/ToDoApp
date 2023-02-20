import { useEffect, useState } from "react";

function Display(){
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        const intervalId = setInterval(() => {
            fetch("http://localhost:8080/todos", {
                method: "GET",
                mode: "cors",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then(res => {return res.json()})
            .then(data => setTodos(data))
            .catch(err => console.log(err));
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="display-container">
            <h5>Things to Do</h5>
        </div>
    )
}

export default Display;

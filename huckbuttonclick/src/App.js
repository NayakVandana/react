import React,{useState} from "react";

function App(){
    const[count,setCount]=useState(0);

    function Incr(){
        console.log("button Click");
        setCount(count + 1);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={Incr}>
            Click me
        </button>
        </>

    );
}
export default App;
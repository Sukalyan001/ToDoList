import React, { useState } from "react";
import ToDOList from "./ToDOList";

const App = () => {

    const [List, addList] = useState("");
    const [items, addItems] = useState([]);


    const inValue = (event) => {
        addList(event.target.value);
    };
    const clickMe = () => {
        addItems((oldData) => {
            return [...oldData, List];
        });
        addList('');
    };
    const deleteItem = (id)=>{
console.log("deleted");


addItems((oldData) =>{
return oldData.filter((arrElement,ind) =>{
    return ind !== id;
})
})

    }


    return (
        <>
            <div className="outerdiv">
                <div className="innerdiv">
                    <h2>ToDo List✏️</h2>
                    <input type="text" placeholder="Now add some..."
                    value={List}
                    onChange={inValue} />
                    <button onClick={clickMe}> + </button>
                    <ol>

                        {items.map((innval,index) => {
                            return   <ToDOList text={innval} 
                            key={index}
                            id={index} 
                            onSelect={deleteItem} />;
                        })}
                    </ol>
                </div>


            </div>

        </>
    );
}

export default App;
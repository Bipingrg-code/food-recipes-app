import React from 'react'

function Hello() {
    const sayHello = () =>{
        console.log('hello');
    }
    return (
        <div>
            
            <button onClick={sayHello}>This hello from othercom</button>
        </div>
    )
}

export default Hello

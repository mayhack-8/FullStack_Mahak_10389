//q1 - create a react form component that collects user info and displays it after submission
import { useState } from "react";

function Form1(){

    const [inputData, setInputData] = useState({ fname:"", email:"", age:"" });
    const [show, setShow] = useState(false);

    function handleData(e){
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function submitData(e){
        e.preventDefault();
        setShow(true);
    }

    let output = "";

    if(show){
        output = (
            <>
                <h3>Submitted Data</h3>
                <p>Name: {inputData.fname}</p>
                <p>Email: {inputData.email}</p>
                <p>Age: {inputData.age}</p>
            </>
        );
    }

    return (
        <>
         <form onSubmit={submitData}>

            <label>Name:</label>
            <input type="text" name="fname" value={inputData.fname} onChange={handleData} />
            <br />

            <label>Email:</label>
            <input type="email" name="email" value={inputData.email} onChange={handleData} />
            <br />

            <label>Age:</label>
            <input type="number" name="age" value={inputData.age} onChange={handleData} />
            <br />

            <button>Submit</button>
            <br />

        </form>

        {output}

        </>
    )
}

export default Form1;
/*
in App.js file call this </Form1> component
import Form1 from './Form1';
function App() {
return (
    <>
       <Form1></Form1>
    </>
);
}
 */
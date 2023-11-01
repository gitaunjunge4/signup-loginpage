import React from "react";
import '../App.css';
import * as Yup from "yup";

function SignUp(){
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">TEst</h1>
            <form className="flex flex-col space-y-4 w-1/2 border-zinc-950">
                <input type="text" placeholder="Name..."/>
                <input type="text" placeholder="email@email.com"/>
                <input type="text" placeholder="password123"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SignUp
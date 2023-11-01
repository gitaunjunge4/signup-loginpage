import React, { useState, useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"; 



// validate the user and password input to inlude at least one of he follwing
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function SignUp() {
  
  //allows us to set focus to user input when component loads 
  const userRef = useRef();

  // setting a focus if an error arises 
  const errRef = useRef();


  // state for the use field 
  const [user, setUser] = useState('');                //tied to user input
  const [validName, setValidName] = useState(false);   //whether the inputted name validates or not 
  const [userFocus, setUserFocus] = useState(false);   //whether we have focus on that input field or not 

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // sets the focus on the user input when the component loads
  // useEffect(()=> {
  //   userRef.current.focus();
  // }, [])


  // validates the username only when user changes
  useEffect(() => {
    const result = USER_REGEX.test(user)   //returns boolean
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])


  // validates the passwords to make sure they match 
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd;
    setValidPwd(match)
  }, [pwd, matchPwd])

    const [formData, setFormData] = useState({
        first_name : "",
        last_name : "", 
        email : "", 
        password : "",
        confirm_password : "" 
    });

    function handleInput(e){
        e.preventDefault();
        const name = e.target.name;
        let value = e.target.value;
        console.log(name);
        console.log(value);
        setFormData({
            ...formData,
            name : value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        //set state
    }
    console.log(formData)

    return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-0">
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-0">
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-0">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-0">
                <input
                  id="password"
                  name="password"
                  type="password"
                  minLength={8}
                  maxLength={20}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-0">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-900 px-3 p-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
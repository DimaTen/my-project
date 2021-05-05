import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const[details, setDetails] = useState({name: "", email:"", password: "", country: "", language: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        // if agree === true, it will be set to false
        // if agree === false, it will be set to true
        setAgree(!agree);
        // Don't miss the exclamation mark
    }



    return (
      <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error != "") ? ( <div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <h2>Welcome!</h2>
            </div>

            <div className="form-group">
            <input type="button" value="Freelancer"></input>
            <input type="button" value="Corporate"></input>
            </div>

            <div className="form-group">
                <input type="button" value="SIGNUP WITH BANKID"></input>
            </div>


            <div className="form-group">
                <p>**** OR ****</p>
            </div>


            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>

            <div className="form-group">
            <label for="country">Your taxation country</label>
                <select id="country" name="country" >
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="sweden">Sweden</option>
                </select>
            </div>
            <div className="form-group">
            <label for="language">Language</label>
                <select id="country" name="country">
                    <option value="English">English</option>
                    <option value="Swedish">Swedish</option>
                    <option value="German">German</option>
                    <option value="French">French</option>
                </select>
            </div>


            <div className="form-group">
                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
            </div>
            <input type="submit" value="Sign up" disabled={!agree} className="btn" >
               
            </input>
        </div>
      </form>
    )
}

export default LoginForm

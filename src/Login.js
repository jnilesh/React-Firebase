import React from 'react'
import './Login.css'

function Login() {

    const signIn = () => {
        
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" 
                alt=""/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png"
                 alt=""/>
            </div>
            
            <button onClick={signIn} type="submit">
                Sign In
            </button>

        </div>
    )
}

export default Login

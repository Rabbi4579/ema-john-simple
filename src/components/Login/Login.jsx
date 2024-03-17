import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {


    const {signIn} = useContext(AuthContext)

    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)



        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            // form.reset()
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <input className='submit-btn' type="submit" value="login" />
                <small><p className='new-ema'>New to Ema-john? <Link to='/register'><span className='text-color'> Create New Account</span></Link></p>  </small>
            </form>
        </div>
    );
};

export default Login;
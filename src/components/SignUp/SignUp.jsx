import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';



const SignUp = () => {
    const [error, setError] = useState('')

    const { createUser } = useContext(AuthContext)




    const handleSignUp = (event) => {

        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        setError('')



        if (password !== confirm) {
            setError('Password did not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be six characters longer')
            return
        }

        createUser(email, password)
            .then(reult => {
                const loggedUser = reult.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm-password" required />
                </div>
                <input className='submit-btn' type="submit" value="Sign Up" />
                <small>
                    <p className='new-ema'>Already have an account? <Link to='/login'> <span className='text-color'> Login</span></Link></p>

                </small>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;
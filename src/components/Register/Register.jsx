import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.init';

const Register = () => {
    

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Please Register!</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Name" />
                    {/* Email */}
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    {/* Password */}
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                </form>
                <p>Already have ana account? Please <Link className='text-blue-600 hover:text-red-900 underline' to='/login'>Login</Link> </p>
            </div>
        </div>

    );
};

export default Register;
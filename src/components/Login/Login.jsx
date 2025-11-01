import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Please Login!</h1>
                <form>
                    <fieldset className="fieldset">
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
                <p>New to this website? Please <Link className='text-blue-600 hover:text-red-900 underline' to='/register'>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Register = () => {

const {createUser}=useContext(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email=form.email.value;
        const password = form.password.value;
        
        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            form.reset()
        })
        .then(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center  lg:text-left">
                        <h1 className="text-3xl font-bold">Register now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                               
                                   <span className='text-xs'>  New Here? <Link  className="label-text-alt link link-hover" to="/login"> Login</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
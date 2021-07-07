import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';

export default function Loginview() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function login(event) {
        event.preventDefault();
        const user = {
            email: email,
            password: password
        }
        dispatch(loginUser(user));
    }

    return (
        <div>

            <div className="row justify-content-center">
                <div className="col-md-5 card p-3" style={{ marginTop: '128px' }}>

                    <h2 className='text-center m-3'>Login</h2>

                    <form onSubmit={login}>
                        <input type="text" placeholder="email" className='form-control' value={email} required onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="text" placeholder="password" className='form-control' value={password} required onChange={(e) => { setPassword(e.target.value) }} />
                        <button type="submit" className='btn' style={{ margin: '16px 0 0 auto' }}>LOGIN</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

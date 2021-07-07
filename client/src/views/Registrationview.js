import React, { useState } from 'react'

export default function Registrationview() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function register(event) {
        event.preventDefault();
        if (password == confirmPassword) {
            const user = {
                name: name,
                email: email,
                password: password
            }
        }
        else {
            alert('Passwords do not match!');
        }
    }

    return (
        <div>

            <div className="row justify-content-center">
                <div className="col-md-5 card p-3" style={{ marginTop: '128px' }}>

                    <h2 className='text-center m-3'>Register</h2>

                    <form onSubmit={register}>
                        <input type="text" placeholder="name" className='form-control' value={name} required onChange={(e) => { setName(e.target.value) }} />
                        <input type="text" placeholder="email" className='form-control' value={email} required onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="text" placeholder="password" className='form-control' value={password} required onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="text" placeholder="confirm password" className='form-control' value={confirmPassword} required onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        <button type="submit" className='btn' style={{ margin: '16px 0 0 auto' }}>REGISTER</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

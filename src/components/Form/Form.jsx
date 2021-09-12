import React, { useState } from 'react';
import MyButton from '../UI/btn/MyButton';

const Form = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">
            <form action="submit">
                <div className="login">
                    <label>Login</label>
                    <input value={login} onChange={(e) => setLogin(e.target.value)} type="login" />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <div className="submit">
                    <MyButton  name='Entry'/>
                    <MyButton name='Registration'/>
                </div>
            </form>
        </div>
    );
};

export default Form;
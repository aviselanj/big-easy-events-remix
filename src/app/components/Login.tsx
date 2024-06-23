import React from 'react';
import { useState } from 'react';
import Button from './Button';
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (

        <>
            <form className='float-right relative bg-white'  onSubmit={handleSubmit} m-3>
                <input
                    className=''
                    p-1 text-slate
                    text-4xl
                    type="email"
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)
                    }
                    required />
                <input
                    className='relative bg-white'
                    p-1 text-slate
                    type="password"
                    placeholder='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)

                    }
                    required
                />
                <Button onClick={function (): void {
                    throw new Error('Function not implemented.');
                } } />
            </form>
        </>
    );
}

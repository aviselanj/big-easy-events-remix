import React from 'react';
import { useState } from 'react';
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (

        <>
            <form onSubmit={handleSubmit} m-3>
                <input
                    p-1 text-slate
                    text-4xl
                    type="email"
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)
                    }
                    required />
                <input
                    p-1 text-slate
                    type="password"
                    placeholder='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)

                    }
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </>
    );
}

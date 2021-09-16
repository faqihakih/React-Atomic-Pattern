import React from 'react'
import { Input } from '../../components'

export default function Login() {
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-1/2">
                    image
                </div>
                <div className="w-1/2">
                    <p>Login</p>
                    <Input label="Email" placeholder="Email"/>
                </div>
            </div>
        </div>
    )
}

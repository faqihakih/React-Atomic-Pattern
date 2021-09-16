import React from 'react'

export default function index({label, ...rest}) {
    return (
        <div>
            <label>{label}</label>
            <input {...rest}/>
        </div>
    )
}

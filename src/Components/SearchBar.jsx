import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <p>Search</p>
            <input value={props.search} onChange={props.handleChange}/>
        </div>
    )
}


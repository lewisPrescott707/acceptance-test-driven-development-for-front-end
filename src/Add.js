import { useState } from 'react';

export default function Add() {
    const [data, setData] = useState({
        add_todo: ''
    });

    return (
        <input 
            data-testid="todo-input" 
            value={data.add_todo} 
            onChange={(evt) => setData(oldData => ({ ...oldData, [evt.target.name]: evt.target.value }))}
            name="add_todo" 
        />
    );
}
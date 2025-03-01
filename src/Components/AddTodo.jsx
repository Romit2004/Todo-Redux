import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/todoSlice'

function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const handleAdd = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    

    return (
        <>
            <form onSubmit={handleAdd}>
            <input type="text"
            placeholder='Enter todo'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            />
            <button type='submit'>
            Add

            </button>
            </form>

        </>
    )
}

export default AddTodo

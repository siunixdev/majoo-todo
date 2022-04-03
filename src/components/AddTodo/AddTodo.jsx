import React, { useEffect, useState } from 'react'
import './AddTodo.sass'
import { useDispatch } from 'react-redux'
import { postTodo } from '../../actions/todos'

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0);

  const dispatch = useDispatch()

  const add = () => {
    dispatch(postTodo(0, title, description, status))
    clear()
  }

  const clear = () => {
    setTitle("")
    setDescription("")
    setStatus(0)
  }

  return (
    <div className='form'>
      <div className='form__content'>
        <span className='form__label'>Title</span>
        <input
          placeholder='Judul'
          type="text"
          className='form-control'
          onChange={e => { setTitle(e.target.value) }}
          value={title}
        />
      </div>
      <div className='form__content'>
        <span className='form__label'>Description</span>
        <textarea
          className='form-control resize-none'
          onChange={e => { setDescription(e.target.value) }}
          value={description}
        />
      </div>
      <div className='form__content'>
        <span className='form__label'>Status</span>
        <select
          className='form-control'
          onChange={e => { setStatus(e.target.value) }}
          value={status}
        >
          <option value="0">Waiting</option>
          <option value="1">Done</option>
        </select>
      </div>
      <button
        onClick={() => {
          add()
        }}
        className='form__submit'
      >
        Add now!
      </button>
    </div>
  )
}

export default AddTodo
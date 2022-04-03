import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DoneList = () => {
  const navigate = useNavigate()
  const todoList = useSelector(state => state.todoState.done)
  const [done, setDone] = useState([])

  const setDoneData = () => {
    setDone(todoList)
  }

  useEffect(() => {
    setDoneData()
  }, [done])

  return (
    <div className='list'>
      {done?.map((data, i) => (
        <div
          key={i}
          className='list__content list__content--success'
          onClick={() => navigate(`/detail/${data.id}`)}
        >
          <span>{data.title}</span>
        </div>
      ))}
    </div>
  )
}

export default DoneList
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const WaitingList = () => {
  const navigate = useNavigate()
  const todoList = useSelector(state => state.todoState.waiting)
  const [waiting, setWaiting] = useState([])

  const setWaitingData = () => {
    setWaiting(todoList)
  }

  useEffect(() => {
    setWaitingData()
  }, [waiting])

  return (
    <div className='list'>
      {waiting?.map((data, i) => (
        <div
          key={i}
          className='list__content list__content--warning'
          onClick={() => navigate(`/detail/${data.id}`)}
        >
          <span>{data.title}</span>
        </div>
      ))}
    </div>
  )
}

export default WaitingList
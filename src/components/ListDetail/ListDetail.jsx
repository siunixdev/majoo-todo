import React, { useEffect } from 'react'
import './ListDetail.sass'
import Modal from '../Modal/Modal'
import { getDetail, setStatus, deleteData } from '../../actions/todos'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function ListDetail() {
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const detail = useSelector(state => state.todoState.detail)

  const getDetailTodo = () => {
    dispatch(getDetail(params.id))
  }

  const setStatusTodo = () => {
    dispatch(setStatus(params.id, !detail.status))
    if (detail.status) {
      navigate('/done')
    } else {
      navigate('/waiting')
    }
  }

  const deleteTodo = () => {
    dispatch(deleteData(params.id))
    if (detail.status) {
      navigate('/done')
    } else {
      navigate('/waiting')
    }
  }

  useEffect(() => {
    getDetailTodo()
  })

  let closeLink = detail.status ? '/done' : '/waiting'

  return (
    <Modal title="Detail" closeLink={closeLink}>
      <span className='title'>{detail.title}</span>
      {
        detail.status ? (
          <div className='status status--success'>Selesai Dikerjakan</div>
        ) : (
          <div className='status status--warning'>Belum Dikerjakan</div>
        )
      }
      <span className='description'>{detail.description}</span>
      <span className='date'>Created at {detail.createdAt}</span>
      <div className='flex justify-between items-center'>
        {
          detail.status ? (
            <button
              className='bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-500'
              onClick={() => setStatusTodo()}
            >Change Status to Waiting</button>
          ) : (
            <>
              <button
                className='bg-green-600 text-white p-2 rounded-md hover:bg-green-500'
                onClick={() => setStatusTodo()}
              >Change Status to Done</button>
              <button
                className='bg-red-600 text-white p-2 rounded-md hover:bg-red-500'
                onClick={() => deleteTodo()}
              >Delete</button>
            </>
          )
        }
      </div>
    </Modal>
  )
}

export default ListDetail
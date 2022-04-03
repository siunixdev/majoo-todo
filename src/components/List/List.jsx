import React from 'react'
import './List.sass'
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import WaitingList from '../WaitingList/WaitingList'
import DoneList from '../DoneList/DoneList'
import ListDetail from '../ListDetail/ListDetail'


const List = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full'>
      <div className='space-y-4'>
        <div className='tab'>
          <div
            onClick={() => navigate('/waiting')}
            className='tab__button tab__button--warning'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Waiting</span>
          </div>
          <div
            onClick={() => navigate('/done')}
            className='tab__button tab__button--success'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Done</span>
          </div>
        </div>
        <Routes>
          <Route path='waiting' element={<WaitingList />} />
          <Route path='done' element={<DoneList />} />
          <Route path='detail/:id' element={<ListDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default List
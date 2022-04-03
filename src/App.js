import React, { useEffect } from 'react'
import './App.sass';
import Topbar from './components/Topbar/Topbar';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getTodos } from './actions/todos'
import { Toaster } from 'react-hot-toast'

function App() {
  const dispatch = useDispatch()

  const todos = () => {
    dispatch(getTodos())
  }

  useEffect(() => {
    todos()
  }, [])

  return (
    <div className='app'>
      <BrowserRouter>
        <Topbar />
        <div className='app__body'>
          <span className='app__title'>Todo List App</span>
          <AddTodo />
          <List />
        </div>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;

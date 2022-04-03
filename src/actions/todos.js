import { api } from '../helpers/apiServices'
import { alert, getDate } from '../helpers/helper'
import {
  TODO_DONE_LIST,
  TODO_WAITING_LIST,
  DETAIL_TODO
} from './constant'

export const setWaitingTodos = (payload) => ({
  type: TODO_WAITING_LIST,
  todos: payload
})

export const setDoneTodos = (payload) => ({
  type: TODO_DONE_LIST,
  todos: payload
})

export const setDetailTodos = (payload) => ({
  type: DETAIL_TODO,
  todo: payload
})

export const getTodos = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.get()
        .then(payload => {
          let waiting = new Array()
          let done = new Array()
          payload.data.forEach(data => {
            if (data.status) {
              done.push(data)
            } else {
              waiting.push(data)
            }
          });

          dispatch(setWaitingTodos(waiting))
          dispatch(setDoneTodos(done))
        })
        .catch(err => {
          console.log("Internal Error");
        })
    })
  }
}

export const getDetail = (id) => {
  return (dispatch, getState) => {
    const { todoState } = getState()
    let waiting = todoState.waiting;
    let done = todoState.done;

    let detail = new Object()

    done.forEach((data, i) => {
      if (data.id == id) {
        detail = done[i]
      }
    });

    waiting.forEach((data, i) => {
      if (data.id == id) {
        detail = waiting[i]
      }
    });

    dispatch(setDetailTodos(detail))
  }
}

export const setStatus = (id, status) => {
  return (dispatch, getState) => {
    const { todoState } = getState()
    let waiting = todoState.waiting;
    let done = todoState.done;

    let detail = new Object()

    done.forEach((data, i) => {
      if (data.id == id) {
        detail = done[i]
        done.splice(i, 1)
      }
    });

    waiting.forEach((data, i) => {
      if (data.id == id) {
        detail = waiting[i]
        waiting.splice(i, 1)
      }
    });

    detail.id = Math.floor(Date.now() / 1000)
    detail.status = status

    if (status) {
      done.push(detail)
    } else {
      waiting.push(detail)
    }

    dispatch(setDoneTodos(done))
    dispatch(setWaitingTodos(waiting))
    alert.success("Status has been change!")
  }
}

export const deleteData = (id) => {
  return (dispatch, getState) => {
    const { todoState } = getState()
    let waiting = todoState.waiting;

    let detail = new Object()

    waiting.forEach((data, i) => {
      if (data.id == id) {
        detail = waiting[i]
        waiting.splice(i, 1)
      }
    });

    dispatch(setWaitingTodos(waiting))
    alert.success("Data has been deleted!")
  }
}

export const postTodo = (id = 0, title, description, status = 0) => {
  return (dispatch, getState) => {
    if (title.length == 0 || description.length == 0) {
      alert.error("Data can't be empty!")
      return false
    }

    const { todoState } = getState()
    let waiting = todoState.waiting;
    let done = todoState.done;

    if (id === 0) {
      id = Math.floor(Date.now() / 1000)
    }

    let newData = new Object()
    newData.id = id
    newData.title = title
    newData.description = description
    newData.status = status
    newData.createdAt = getDate()

    if (status == 1) {
      done.push(newData)
      dispatch(setDoneTodos(done))
    } else {
      waiting.push(newData)
      dispatch(setWaitingTodos(waiting))
    }

    alert.success("Data Successfully to add!")
  }
}
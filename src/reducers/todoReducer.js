import {
  TODO_DONE_LIST,
  TODO_WAITING_LIST,
  DETAIL_TODO
} from "../actions/constant"

const INITIAL_STATE = {
  waiting: null,
  done: null,
  detail: {
    id: "",
    title: "",
    description: "",
    status: 0,
    createdAt: "",
  },
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_WAITING_LIST:
      return {
        ...state,
        waiting: action.todos
      }
    case TODO_DONE_LIST:
      return {
        ...state,
        done: action.todos
      }
    case DETAIL_TODO:
      return {
        ...state,
        detail: action.todo
      }
    default:
      return state
  }
}

export default todoReducer
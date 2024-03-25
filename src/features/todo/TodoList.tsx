import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../stores/hooks"
import { fetchNotes } from "./todoSlice"
import Nav from "../../components/Nav"

import "./TodoList.css"

const TodoList = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.todos.entities)

  useEffect(() => {
    dispatch(fetchNotes(0))
  }, [dispatch])

  const listItems = tasks.map(task => (
    <li key={task.timestamp}>
      <div className="Row">
        <div style={{ textAlign: "left" }}>
          <b>{task.title}</b>
        </div>
        <div style={{ textAlign: "justify" }}>
          <p>{task.content}</p>
        </div>
      </div>
    </li>
  ))
  return (
    <>
      <Nav title="TODOs" />
      <div style={{ paddingTop: 50 }}>
        <ul>{listItems}</ul>
      </div>
    </>
  )
}

export default TodoList

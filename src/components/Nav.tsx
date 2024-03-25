import { useNavigate } from "react-router-dom"
import backIcon from "../assets/icons/ic-back.png"
import { clearTodos } from "../features/todo/todoSlice"

import "./Nav.css"
import { useDispatch } from "react-redux"

interface NavProps {
  title: string
}

const Nav = ({ title }: NavProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="NavBar">
      <button
        className="NavButton"
        onClick={() => {
          navigate(-1)
          dispatch(clearTodos())
        }}
      >
        <img style={{ width: 32, height: 32 }} src={backIcon} alt="Back" />
      </button>
      <div className="Title">
        <b>{title}</b>
      </div>
      <div style={{ width: 64 }} />
    </div>
  )
}

export default Nav

import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/amico.png"

import "../../App.css"
import "./Started.css"

const Started = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "scroll"
    }
  }, [])

  return (
    <div className="Container">
      <div className="Head">
        <div>
          <img src={logo} className="Logo-started" alt="logo" />
        </div>
        <div style={{ paddingTop: 10, color: "#363942", fontSize: 30 }}>
          <b>Enjoy Your Time</b>
        </div>
        <p
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            textAlign: "center",
            fontSize: 15,
            color: "GrayText",
          }}
        >
          when you are confused about managing your task come to us
        </p>
      </div>
      <div style={{ flex: 0.5 }} />
      <div className="Link">
        <div style={{ flex: 1 }} />
        <Link to="/todos">
          <button className="Button">
            <text className="ButtonText">
              <b>Let Start</b>
            </text>
          </button>
        </Link>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  )
}

export default Started

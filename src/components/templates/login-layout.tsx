import React from "react"

const LoginLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="grid min-h-screen grid-cols-1 grid-rows-1">
        <div className="flex items-center justify-between">{children}</div>
      </div>
    </div>
  )
}

export default LoginLayout

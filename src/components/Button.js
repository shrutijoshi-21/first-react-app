import React from 'react'

const Button = ({text, ...props}) => {
  return (
    <button className="rounded-lg py-3.5 px-6 bg-green-200 hover:bg-green-300 text-lg font-semibold" {...props}>{text}</button>
  )
}

export default Button
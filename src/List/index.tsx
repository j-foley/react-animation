import React, { useState } from 'react'
import './style.css'

export const List = () => {
  const [list, setList] = useState([...Array(5).keys()])

  const handleAdd = () =>
    setList((prev) => {
      const lastItem = prev.at(-1)
      return [...prev, lastItem === undefined ? 0 : lastItem + 1]
    })
  const handleRemove = (index: number) => setList((prev) => prev.filter((_, i) => index !== i))

  return (
    <>
      <button onClick={handleAdd}>Add item</button>
      <ul>
        {list.map((item, index) => (
          <li key={`item-${item}`}>
            <div>List item {item + 1}</div>
            <button onClick={() => handleRemove(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

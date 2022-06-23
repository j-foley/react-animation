import React, { useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import './style.css'

export const List = () => {
  const [list, setList] = useState([...Array(5).keys()])

  const transition = useTransition(list, {
    from: { opacity: 0, marginTop: 5 },
    enter: { opacity: 1, maxHeight: 50, marginTop: 5 },
    leave: { opacity: 0, maxHeight: 0, marginTop: 0 }
  })

  const handleAdd = () =>
    setList((prev) => {
      const lastItem = prev.at(-1)
      return [...prev, lastItem === undefined ? 0 : lastItem + 1]
    })
  const handleRemove = (index: number) => setList((prev) => prev.filter((_, i) => index !== i))

  return (
    <>
      <button type='button' onClick={handleAdd}>
        Add item
      </button>
      <ul>
        {transition((style, item, _, index) => (
          <animated.li style={style} key={`item-${item}`}>
            <div>List item {item + 1}</div>
            <button type='button' onClick={() => handleRemove(index)}>
              X
            </button>
          </animated.li>
        ))}
      </ul>
    </>
  )
}

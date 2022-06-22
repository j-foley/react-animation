import { AnimatePresence, motion } from 'framer-motion'
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

  const itemVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
  }

  return (
    <>
      <button type='button' onClick={handleAdd}>
        Add item
      </button>
      <ul>
        <AnimatePresence>
          {list.map((item, index) => (
            <motion.li
              key={`item-${item}`}
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={itemVariant}
            >
              <div>List item {item + 1}</div>
            <button type='button' onClick={() => handleRemove(index)}>
              X
            </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  )
}

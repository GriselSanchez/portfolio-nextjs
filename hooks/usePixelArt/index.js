import React, { useState } from 'react'

export const usePixelArt = (height, width) => {
  const [isClicked, setIsClicked] = useState(false)
  const [points, setPoints] = useState([])

  const table = []

  const draw = (event, point) => {
    event.currentTarget.style.backgroundColor = 'black'
  }

  const onMouseDown = point => event => {
    setIsClicked(true)
    draw(event, point)
  }

  const onMouseOver = point => event => {
    if (isClicked) draw(event, point)
  }

  const onMouseUp = () => {
    setIsClicked(false)
  }

  for (let i = 1; i < height; i++) {
    const columns = []

    for (let j = 1; j < width; j++) {
      const point = { x: j, y: i }
      columns.push(
        <td
          key={j}
          onMouseDown={onMouseDown(point)}
          onMouseOver={onMouseOver(point)}
          onMouseUp={onMouseUp}
          style={{
            backgroundColor: points.some(({ x, y }) => point.x === x && point.y === y)
              ? 'black'
              : '',
          }}
        />,
      )
    }

    table.push(<tr key={i}>{columns}</tr>)
  }

  return table
}

import React, { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

type Props = {
  children: React.ReactNode
  backgroundColor: string
  direction: string
  left: string
}

const calc = (x: number, y: number): [number, number, number] => [
  -(y - window.innerHeight / 2) / 360,
  (x - window.innerWidth / 2) / 240,
  1.02,
]

const trans = (x: number, y: number, s: number): string =>
  `perspective(900px) rotateX(${-x}deg) rotateY(${-y}deg)`

const HoverCard: React.FC<Props> = ({
  children,
  backgroundColor,
  direction,
  left,
}) => {
  const [hovered, setIsHovered] = useState(false)
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 6000, friction: 1000 },
  }))

  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMousePosition = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event
      setCursorCoords({ x, y })
    }

    window.addEventListener('mousemove', handleMousePosition)

    return () => {
      window.removeEventListener('mousemove', handleMousePosition)
    }
  }, [])

  const calcTranslate = (
    coordinate: number,
    containerSize: number,
    itemSize: number,
  ) => (coordinate / containerSize) * (containerSize - itemSize)

  const translateX =
    typeof window !== 'undefined'
      ? calcTranslate(cursorCoords.x, window.innerWidth, 600)
      : 0
  const translateY =
    typeof window !== 'undefined'
      ? calcTranslate(cursorCoords.y, window.innerHeight, 500)
      : 0

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = event
    set({ xys: calc(x, y) })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] })
    setIsHovered(false)
  }

  return (
    <animated.div
      className="  overflow-hidden w-full  mb-3 md:mb-8 rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`z-[1] w-[1400px] relative bg-[#000] h-full border-[#30363d] border-[2px] rounded-xl shadow-xl md:flex ${direction} justify-between`}
      >
        {children}
        <div
          className={`absolute w-[400px] border-none  bottom-[50px] h-[1000px] z-[-1] back ${hovered ? 'opacity-90' : 'opacity-0'} `}
          style={{
            transform: `translateX(${translateX}px) translateY(${2 * translateY}px)`,
            background: backgroundColor,
            borderRadius: '100%',
            mixBlendMode: 'soft-light',
            left: left,
            willChange: 'transform',
            transition: 'transform 0.2s cubic-bezier',
          }}
        ></div>
      </div>
    </animated.div>
  )
}

export default HoverCard

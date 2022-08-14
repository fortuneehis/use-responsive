import { ReactElement } from "react"

export type Direction = "horizontal" | "vertical"

export type Constraints = Partial<{
  direction: Direction
  min: number
  max: number
}>

export type ResponsiveProps = {
  children: ReactElement
} & Constraints

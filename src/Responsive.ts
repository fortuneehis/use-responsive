import { ResponsiveProps } from "./types"
import useResponsive from "./useResponsive"

const Responsive = ({ min, max, direction, children }: ResponsiveProps) => {
  const isValid = useResponsive({
    min,
    max,
    direction,
  })

  return isValid ? children : null
}

export default Responsive

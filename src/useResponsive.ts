import { useCallback, useEffect, useState } from "react"
import { Constraints } from "./types"

const useResponsive = ({
  min = 0,
  max = Infinity,
  direction = "horizontal",
}: Constraints) => {
  const [windowSize, setWindowSize] = useState(() =>
    typeof window !== "undefined"
      ? {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      : null
  )

  const [isValid, setIsValid] = useState(false)

  const valid = useCallback(() => {
    if (!windowSize) return

    if (direction !== "horizontal" && direction !== "vertical") {
      throw new Error("'direction' should either be 'horizontal' or 'vertical'")
    }

    if (typeof min !== "number") {
      throw new TypeError("The expected type of 'min' should be a number")
    }

    if (typeof max !== "number") {
      throw new TypeError("The expected type of 'max' should be a number")
    }

    if (
      windowSize[direction === "horizontal" ? "width" : "height"] >= min &&
      windowSize[direction === "horizontal" ? "width" : "height"] < max
    ) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [min, max, windowSize, direction])

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    valid()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [valid, handleResize])

  return isValid
}

export default useResponsive

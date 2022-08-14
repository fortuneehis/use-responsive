import { renderHook } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import { useResponsive } from "../src"

// Solution by Kent C. Dodds from https://spectrum.chat/testing-library/help-react/how-to-set-window-innerwidth-to-test-mobile~70aa9572-b7cc-4397-92f5-a09d75ed24b8?m=MTU1OTU5MTI2MTI0MQ==
beforeAll(() => {
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event("resize"))
  }
})

test("It returns true for mobile", async () => {
  act(() => {
    window.resizeTo(500, 1024)
  })

  const { result } = renderHook(() =>
    useResponsive({
      max: 768,
    })
  )

  expect(result.current).toBeTruthy()
})

test("It returns false for mobile", async () => {
  act(() => {
    window.resizeTo(960, 1024)
  })

  const { result } = renderHook(() =>
    useResponsive({
      max: 768,
    })
  )
  console.log(result.current)

  expect(result.current).toBeFalsy()
})

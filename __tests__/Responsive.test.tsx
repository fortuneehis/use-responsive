import { act, render, renderHook, screen } from "@testing-library/react"
import React from "react"
import { Responsive } from "../src"

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

test("It shows the h1 element", () => {
  act(() => {
    window.resizeTo(600, 1024)
  })
  render(
    <Responsive max={768}>
      <h1>Mobile</h1>
    </Responsive>
  )

  const query = screen.queryByRole("heading")

  expect(query).not.toBeNull()
})

test("It does not show the h1 element", () => {
  act(() => {
    window.resizeTo(968, 1024)
  })
  render(
    <Responsive max={768}>
      <h1>Mobile</h1>
    </Responsive>
  )

  const query = screen.queryByRole("heading")

  expect(query).toBeNull()
})

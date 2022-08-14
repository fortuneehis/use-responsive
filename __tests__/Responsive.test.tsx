import { render, renderHook, screen } from "@testing-library/react"
import React from "react"
import { Responsive } from "../src"

test("It return true for mobile", () => {
  global.innerWidth = 968
  render(
    <Responsive max={768}>
      <h1>Mobile</h1>
    </Responsive>
  )

  const query = screen.queryByText("Mobile")

  expect(query).toBeNull()
})

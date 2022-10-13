import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { DisplayData } from "./DisplayData"

describe("DisplayData test", () => {
  test("should show content all the time", () => {
    render(<DisplayData data="Testing" />)
    expect(screen.getByText(/Testing/i)).toBeDefined()
  })
})

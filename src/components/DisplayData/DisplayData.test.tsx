import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { DisplayData } from "./DisplayData"

describe("DisplayData test", () => {
  test("should show content all the time", async () => {
    render(<DisplayData data="Testing" />)

    // const displayDataElement = screen.getByText(/GeoJson Data/i)
    const displayDataElement = await screen.findByTestId<HTMLElement>(
      `display-data`,
    )
    expect(displayDataElement).toBeDefined()
  })
})

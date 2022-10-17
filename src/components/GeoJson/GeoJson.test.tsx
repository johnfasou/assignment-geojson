import { beforeEach, describe, expect, test, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { GeoJson } from "./GeoJson"

beforeEach(() => {
  render(<GeoJson />)
})

const selectElements = () => {
  const leftInputElement = screen.getByRole<HTMLInputElement>("textbox", {
    name: /left/i,
  })
  const rightInputElement = screen.getByRole<HTMLInputElement>("textbox", {
    name: /right/i,
  })
  const topInputElement = screen.getByRole<HTMLInputElement>("textbox", {
    name: /top/i,
  })
  const bottomInputElement = screen.getByRole<HTMLInputElement>("textbox", {
    name: /bottom/i,
  })

  return {
    leftInputElement,
    rightInputElement,
    topInputElement,
    bottomInputElement,
  }
}

const submitForm = async () => {
  const submitButtonElement = screen.getByRole<HTMLInputElement>("button", {
    name: /Get GeoJson/i,
  })
  expect(submitButtonElement).toBeDefined()
  await fireEvent.click(submitButtonElement)
}

const checkForErrorElement = async (
  element: HTMLInputElement,
  value: string,
  errorMesage: RegExp,
) => {
  const oldValue = element.value

  fireEvent.change(element, { target: { value: value } })
  await submitForm()
  const errorElement = screen.getByText<HTMLInputElement>(errorMesage)

  fireEvent.change(element, { target: { value: oldValue } })
}

describe("GeoGson coordinates form", () => {
  test("Form input fields should be displayed and editable", async () => {
    const {
      leftInputElement,
      rightInputElement,
      topInputElement,
      bottomInputElement,
    } = selectElements()

    fireEvent.change(leftInputElement, { target: { value: "44" } })
    expect(leftInputElement.value).toBe("44")

    fireEvent.change(rightInputElement, { target: { value: "45" } })
    expect(rightInputElement.value).toBe("45")

    fireEvent.change(topInputElement, { target: { value: "20" } })
    expect(topInputElement.value).toBe("20")

    fireEvent.change(bottomInputElement, { target: { value: "21" } })
    expect(bottomInputElement.value).toBe("21")
  })

  test("Should show form validation errors", async () => {
    const {
      leftInputElement,
      rightInputElement,
      topInputElement,
      bottomInputElement,
    } = selectElements()

    await checkForErrorElement(
      leftInputElement,
      "41a",
      /Please enter valid Coordinates/i,
    )

    await checkForErrorElement(
      rightInputElement,
      "41a",
      /Please enter valid Coordinates/i,
    )

    await checkForErrorElement(
      topInputElement,
      "41a",
      /Please enter valid Coordinates/i,
    )

    await checkForErrorElement(
      bottomInputElement,
      "41a",
      /Please enter valid Coordinates/i,
    )

    await checkForErrorElement(
      leftInputElement,
      "46",
      /Right longitude should be bigger than Left longitude/i,
    )

    await checkForErrorElement(
      bottomInputElement,
      "22",
      /Top latitude should be bigger than Bottom latitude/i,
    )
  })
})

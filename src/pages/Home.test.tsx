import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Home from "@/pages/Home"

describe("Home", () => {
  it("renders the believe landing page key sections", () => {
    render(<Home />)

    expect(screen.getByRole("heading", { name: /Pure conviction in token form\./i })).toBeTruthy()
    expect(screen.getByRole("heading", { name: /Road To The Moon/i })).toBeTruthy()
    expect(screen.getByRole("heading", { name: /For The True Believers/i })).toBeTruthy()
  })
})

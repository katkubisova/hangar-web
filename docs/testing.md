# Testing Guide

This guide covers testing patterns and setup for this project using Vitest and Testing Library.

## Quick Reference

| Command | Description |
| ------- | -----------: |
 | `pnpm test` | Run tests in watch mode |
 | `pnpm test:ui` | Run tests with UI |
 | `pnpm test:coverage` | Generate coverage report |
 | `pnpm vitest run <pattern>` | Run specific tests |

## Test File Naming

- `*.test.ts` for unit tests
- `*.test.tsx` for component tests

Place test files next to the code they test:

```
src/
├── components/
│   ├── Button.tsx
│   └── Button.test.tsx
└── lib/
    ├── utils.ts
    └── utils.test.ts
```

## Setup

- **Environment**: happy-dom
- **Setup file**: `test/setup.ts`
- **Globals**: Vitest globals enabled (describe, it, expect, etc.)

## Component Testing

Use Testing Library for React component tests:

```tsx
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { Button } from "./Button"

describe("Button", () => {
	it("renders with text", () => {
		render(<Button>Click me</Button>)
		expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
	})

	it("calls onClick when clicked", async () => {
		const user = userEvent.setup()
		const onClick = vi.fn()
		render(<Button onClick={onClick}>Click me</Button>)
		
		await user.click(screen.getByRole("button"))
		expect(onClick).toHaveBeenCalledOnce()
	})
})
```

## Test Utilities

Custom utilities available in `src/lib/test-utils.ts`:

```tsx
import { render } from "@/lib/test-utils"
import { MyComponent } from "./MyComponent"

it("renders", () => {
	render(<MyComponent />)
})
```

Common patterns:

```tsx
// Query elements
screen.getByRole("button")
screen.getByText("Hello")
screen.getByTestId("submit-button")

// Wait for conditions
await waitFor(() => {
	expect(screen.getByText("Loaded")).toBeInTheDocument()
})

// User interactions
const user = userEvent.setup()
await user.click(button)
await user.type(input, "hello")
await user.keyboard("{Enter}")
```

## Mocking

### Vitest Mocks

```tsx
// Mock a module
vi.mock("@/lib/api", () => ({
	getData: vi.fn().mockResolvedValue({ id: 1 }),
}))

// Mock function
const onClick = vi.fn()
expect(onClick).toHaveBeenCalledWith("arg")
```

### Timers

```tsx
beforeEach(() => {
	vi.useFakeTimers()
})

afterEach(() => {
	vi.useRealTimers()
})

it("debounces", () => {
	// ...
	vi.advanceTimersByTime(500)
})
```

## Best Practices

1. **Test behavior, not implementation** - Focus on what users see/do
2. **Use accessible queries** - Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **One assertion per test** - Keep tests focused and readable
4. **Descriptive test names** - "should [expected behavior] when [condition]"
5. **Avoid testing library internals** - Don't test React or Testing Library itself

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
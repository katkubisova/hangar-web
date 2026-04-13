# Error Handling Guide

This guide covers error handling patterns for this project.

## Guard Clauses

Use guard clauses to avoid nested ifs and early returns for invalid states:

```tsx
// ❌ Avoid: Nested ifs
async function processUser(id: string) {
	if (id) {
		const user = await db.getUser(id)
		if (user) {
			if (user.isActive) {
				return process(user)
			} else {
				throw new Error("User inactive")
			}
		} else {
			throw new Error("User not found")
		}
	} else {
		throw new Error("ID required")
	}
}

// ✅ Prefer: Guard clauses
async function processUser(id: string) {
	if (!id) {
		throw new Error("ID required")
	}

	const user = await db.getUser(id)
	if (!user) {
		throw new Error("User not found")
	}

	if (!user.isActive) {
		throw new Error("User inactive")
	}

	return process(user)
}
```

## tRPC Error Handling

tRPC procedures return typed responses. Handle errors through response status:

```tsx
// Server procedure
async function getPost(input: { id: string }) {
	const post = await db.post.findUnique({ where: { id: input.id } })
	
	if (!post) {
		throw new TRPCError({
			code: "NOT_FOUND",
			message: "Post not found",
		})
	}

	return { success: true, post }
}

// Client handling
const { data, error } = useQuery(trpc.post.get.queryOptions({ id: "1" }))

if (error) {
	return <div>Error: {error.message}</div>
}

if (!data) {
	return <div>Loading...</div>
}
```

### Common tRPC Error Codes

| Code | HTTP Status | When to Use |
| ---- | ----------- | ----------- |
| BAD_REQUEST | 400 | Invalid input parameters |
| UNAUTHORIZED | 401 | Authentication required |
| FORBIDDEN | 403 | Insufficient permissions |
| NOT_FOUND | 404 | Resource not found |
| CONFLICT | 409 | Resource conflict |
| INTERNAL_SERVER_ERROR | 500 | Server-side errors |

## React Error Boundaries

Catch JavaScript errors in component tree:

```tsx
// src/app/error.tsx (Next.js default error boundary)
"use client"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<div>
			<h2>Something went wrong!</h2>
			<button onClick={() => reset()}>Try again</button>
		</div>
	)
}

// Custom error boundary for specific sections
import { ErrorBoundary } from "react-error-boundary"

functionFallback() {
	return <div>Something went wrong. <button onClick={() => window.location.reload()}>Refresh</button></div>
}

<ErrorBoundary FallbackComponent={Fallback}>
	<MyComponent />
</ErrorBoundary>
```

## Try-Catch Guidelines

### When to Avoid

```tsx
// ❌ Avoid: Try-catch for control flow
async function getUser(id: string) {
	try {
		return await db.user.find(id)
	} catch (e) {
		return null
	}
}

// ✅ Prefer: Check existence first
async function getUser(id: string) {
	const user = await db.user.findUnique({ where: { id } })
	return user ?? null
}
```

### When to Use

Use try-catch for:
- External API calls you don't control
- File system operations
- Parsing user input

```tsx
// ✅ Good: External API
async function fetchExternalData(url: string) {
	try {
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		console.error("API call failed:", error)
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: "External service unavailable",
		})
	}
}
```

## Validation Errors

Use Zod for input validation. Errors are automatically typed:

```tsx
const schema = z.object({
	email: z.string().email("Invalid email"),
	password: z.string().min(8, "Password must be at least 8 characters"),
})

// In tRPC procedure
.input(schema)
.mutation(async ({ input }) => {
	// Input is validated and typed
})
```

Client-side error handling:

```tsx
const mutation = useMutation(trpc.user.create.mutationOptions())

mutation.mutate(
	{ email: "invalid", password: "short" },
	{
		onError: (error) => {
			if (error.data?.code === "BAD_REQUEST") {
				// Validation error - error.message contains details
			}
		},
	}
)
```

## Async Component Errors

Server components throw when errors occur:

```tsx
// Server component
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	
	// This will throw if not found
	const post = await trpc.post.get({ id })
	
	return <article>{post.title}</article>
}

// Handle in error.tsx
export default function Error({ error }: { error: Error }) {
	return <div>Error loading page: {error.message}</div>
}
```

## Logging

```tsx
// Server-side
console.error("Database error:", error)
import { logger } from "@/lib/logger"
logger.error({ error, context: "user-create" })

// Client-side (use in development only)
if (process.env.NODE_ENV === "development") {
	console.error("Client error:", error)
}
```

## Best Practices

1. **Guard clauses over nested ifs** - Early return for invalid states
2. **Type errors** - Use TRPCError with appropriate error codes
3. **Error boundaries** - Catch unexpected errors at appropriate levels
4. **Avoid try-catch for flow control** - Use existence checks
5. **Validate inputs** - Always use Zod schemas for validation
6. **Fail fast** - Return errors early rather than continuing with invalid state

## Resources

- [tRPC Error Handling](https://trpc.io/docs/error-handling)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Zod Error Handling](https://zod.dev/ERROR_HANDLING)
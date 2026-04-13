# tRPC Guide

This guide covers tRPC patterns and usage in this project.

## Project Structure

```
src/trpc/
├── server.ts      # Server-side trpc instance
├── client.ts      # Client-side trpc provider
├── routers/       # API route definitions
│   └── index.ts   # Root router (appRouter)
└── base.ts        # Base procedure definition
```

## Defining Procedures

Routers are defined in `src/trpc/routers/`:

```ts
// src/trpc/routers/user.ts
import { z } from "zod"
import { baseProcedure } from "../base"
import { router } from "../server"

export const userRouter = router({
	list: baseProcedure.query(async () => {
		// Query logic
		return { users: [] }
	}),

	getById: baseProcedure
		.input(z.object({ id: z.string() }))
		.query(async ({ input }) => {
			// Query logic with input validation
			return { user: null }
		}),

	create: baseProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async ({ input }) => {
			// Mutation logic
			return { id: "1", name: input.name }
		}),
})
```

Register routers in `src/trpc/routers/index.ts`:

```ts
import { router } from "../server"
import { userRouter } from "./user"

export const appRouter = router({
	user: userRouter,
})

export type AppRouter = typeof appRouter
```

## Server Usage

Import trpc from `src/trpc/server`:

```ts
// src/app/[locale]/page.tsx
import { trpc } from "@/trpc/server"

export default async function Page() {
	const { users } = await trpc.user.list()
	return <div>{users.map(u => <span key={u.id}>{u.name}</span>)}</div>
}
```

## Client Usage

Use the `useTRPC()` hook from `src/trpc/client`:

```tsx
"use client"

import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"

export function UserList() {
	const trpc = useTRPC()
	const { data } = useQuery(trpc.user.list.queryOptions())
	
	return <div>{data?.users.map(u => <span key={u.id}>{u.name}</span>)}</div>
}
```

For mutations:

```tsx
"use client"

import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function CreateUser() {
	const trpc = useTRPC()
	const queryClient = useQueryClient()
	
	const createMutation = useMutation(trpc.user.create.mutationOptions({
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: trpc.user.list.queryKey() })
		},
	}))
	
	return (
		<button onClick={() => createMutation.mutate({ name: "John" })}>
			Create User
		</button>
	)
}
```

## Input Validation with Zod

Always validate inputs using Zod schemas:

```ts
import { z } from "zod"

const userSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	age: z.number().int().positive().optional(),
})

// In procedure
.input(userSchema)
.mutation(async ({ input }) => {
	// input is typed and validated
})
```

## React Query Options

Use the queryOptions() and mutationOptions() helpers:

```tsx
// Query options
const queryOptions = trpc.user.list.queryOptions({
	// Query config
	enabled: true,
	staleTime: 5000,
})

// Mutation options
const mutationOptions = trpc.user.create.mutationOptions({
	onSuccess: (data) => console.log(data),
	onError: (error) => console.error(error),
})
```

## Best Practices

1. **Use baseProcedure** - All procedures should extend the base procedure
2. **Zod validation** - Always validate inputs with Zod schemas
3. **Typed responses** - Return consistent typed objects from procedures
4. **Server imports** - Use `@/trpc/server` for server components
5. **Client hook** - Use `useTRPC()` for client components
6. **Query invalidation** - Use queryClient.invalidateQueries() after mutations

## Resources

- [tRPC Documentation](https://trpc.io/)
- [tRPC with Next.js](https://trpc.io/docs/client/nextjs)
- [Zod Documentation](https://zod.dev/)
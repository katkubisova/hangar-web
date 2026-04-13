import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { renderHook as testingRenderHook } from "@testing-library/react"
import React, { type ReactNode } from "react"

export function createTestQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				gcTime: 0,
			},
			mutations: {
				retry: false,
			},
		},
	})
}

export function createTRPCWrapper() {
	const queryClient = createTestQueryClient()

	const Wrapper = ({ children }: { children: ReactNode }) => {
		return React.createElement(
			QueryClientProvider,
			{ client: queryClient },
			children
		)
	}

	return {
		wrapper: Wrapper,
		queryClient,
	}
}

export function renderTRPCHook<TData, TArgs>(hook: (args: TArgs) => TData) {
	const { wrapper } = createTRPCWrapper()
	return testingRenderHook(hook, { wrapper })
}

export function mockTRPCProcedure<TOutput>(output: TOutput) {
	return Promise.resolve(output)
}

'use client';

/**
 * Client providers wrapper — currently mounts TanStack Query for the app tree.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

/**
 * Provides a stable `QueryClient` to descendants.
 * @param children - app content under the query provider.
 * @returns QueryClientProvider wrapping `children`.
 * @example
 * <Providers><App /></Providers>
 */
export default function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

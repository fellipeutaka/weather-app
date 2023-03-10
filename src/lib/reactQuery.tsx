import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { api } from "./axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey, signal }) => {
        const { data } = await api.get(String(queryKey[0]), { signal });
        return data;
      },
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 1, // 1 hour
    },
  },
});

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

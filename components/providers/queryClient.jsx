"use client";

import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";

/**
 * Component Query Client
 *
 * @component
 * @param   {Object} queryClient
 * @param   {JSX.Element} queryClient.children  children body
 * @return  {JSX.Element} Component for Scores
 *
 * @example
 * const title = Score
 * const body = 10
 * return (
 *   <QueryClientProvider>
 *      <main>
 *        <h1>hello world</h1>
 *      </main>
 *   </QueryClientProvider>
 * )
 */
function QueryClientProvider({ children }) {
  const queryClient = new QueryClient();
  return <Provider client={queryClient}>{children}</Provider>;
}

export default QueryClientProvider;

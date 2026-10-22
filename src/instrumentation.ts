import { type Instrumentation } from "next";

import { describeError } from "@/lib/error-capture";

// Next.js calls this for every unhandled server error. The error boundary in
// `src/app/error.tsx` handles client-side rendering failures; this is the
// server-side counterpart.
export const onRequestError: Instrumentation.onRequestError = async (error, request, context) => {
  console.error(
    `[request-error] ${request.method} ${request.path} (${context.routeType} ${context.routePath})\n${describeError(error)}`,
  );
};

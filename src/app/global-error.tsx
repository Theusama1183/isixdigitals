"use client";

// Replaces the root layout when an error escapes every route boundary, so it
// has to render its own <html> and <body>. Styles are inlined to guarantee the
// page is readable even when the stylesheet pipeline has failed.
const styles = `
  body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
  .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
  h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
  p { color: #4b5563; margin: 0 0 1.5rem; }
  .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
  a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
  .primary { background: #111; color: #fff; }
  .secondary { background: #fff; color: #111; border-color: #d1d5db; }
`;

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>This page didn&apos;t load</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body>
        <div className="card">
          <h1>This page didn&apos;t load</h1>
          <p>Something went wrong on our end. You can try refreshing or head back home.</p>
          <div className="actions">
            <button className="primary" onClick={() => reset()}>
              Try again
            </button>
            {/* A plain anchor keeps this last-resort page independent of the
                router context it may have failed to render. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className="secondary" href="/">
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

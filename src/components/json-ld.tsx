// Renders a JSON-LD block in a server component. React escapes text content, so
// the payload is injected as-is with `<` escaped — the standard safe pattern for
// structured data.
export function JsonLd({ data, id }: { data: object; id: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

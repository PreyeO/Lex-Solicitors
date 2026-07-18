export interface JsonLdProps {
  /** A JSON-serializable schema.org object (static / trusted content). */
  data: object;
}

/**
 * Renders a `<script type="application/ld+json">` for structured data. Every
 * "less-than" character is replaced with its unicode JSON escape so no closing
 * script tag in the trusted content can break out of the element. The JSON
 * stays valid. Server Component.
 */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

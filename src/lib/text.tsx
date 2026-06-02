import { Fragment } from "react";

/**
 * Render a plain-text string containing single newlines (`\n`) as `<br />`.
 * Use for short multi-line strings like addresses or office hours.
 */
export function withLineBreaks(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

/**
 * Render a plain-text string into `<p>` paragraphs split on blank lines.
 * Use for long-form body copy edited as one big textarea in Studio.
 */
export function paragraphs(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

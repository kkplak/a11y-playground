import React from 'react';

// AccordionDemo uses the native <details>/<summary> elements to create
// collapsible content. These elements provide built‑in keyboard handling
// and semantics. ARIA disclosure patterns can be used when more control is
// needed, but native elements are preferred when possible.

const AccordionDemo: React.FC = () => {
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Accordions and disclosure
        components enable users to expand and collapse sections of content.
        Native <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements
        are simple and accessible out of the box.
      </p>
      <ul>
        <li>Use Enter or Space to toggle each accordion section.</li>
        <li>Tab moves focus to the next summary.</li>
      </ul>
      <details>
        <summary>Accordion Section One</summary>
        <p>
          This section contains hidden content that is revealed when the summary
          is activated. The native elements handle keyboard and screen reader
          support automatically.
        </p>
      </details>
      <details>
        <summary>Accordion Section Two</summary>
        <p>
          Another accordion panel. Each <code>summary</code> behaves like a
          button that controls its associated content region.
        </p>
      </details>
      <details>
        <summary>Accordion Section Three</summary>
        <p>
          Use collapsible sections to progressively disclose information and
          reduce cognitive load. Ensure the summary text clearly describes the
          hidden content.
        </p>
      </details>
    </div>
  );
};

export default AccordionDemo;
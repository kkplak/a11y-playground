import React from 'react';

// ImagesDemo illustrates three common image use cases: decorative images with
// empty alt text, informative images with meaningful alt text and captions,
// and complex images where a short alt is combined with a longer description
// via aria-describedby.

const ImagesDemo: React.FC = () => {
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Providing appropriate
        alternative text for images. Decorative images use an empty <code>alt</code>
        attribute, informative images include concise alt text and optional
        captions, and complex images pair a short alt with a longer visible
        description referenced via <code>aria-describedby</code>.
      </p>
      <ul>
        <li>
          Use your screen reader to navigate to each image and hear the
          alternative text. The decorative image should be skipped.
        </li>
        <li>Ensure that images are meaningful even when visual content is hidden.</li>
      </ul>
      <figure>
        <img src="/images/decorative.png" alt="" />
        <figcaption>Decorative geometric pattern with no semantic meaning.</figcaption>
      </figure>
      <figure>
        <img
          src="/images/informative.png"
          alt="Abstract bar chart with three bars of different heights and colours"
        />
        <figcaption>
          Informative image: the bar chart visualises growth across three
          categories.
        </figcaption>
      </figure>
      <figure>
        <img
          src="/images/complex.png"
          alt="Network diagram overview"
          aria-describedby="complex-desc"
        />
        <figcaption>
          Complex image: an abstract network diagram. A longer description
          follows.
        </figcaption>
      </figure>
      <p id="complex-desc">
        The diagram shows several nodes represented as circles connected by
        arrows. Each node is labelled with letters A–E and arrows indicate
        relationships between them. The layout shows a central node connected
        to all others, illustrating a hub‑and‑spoke network.
      </p>
    </div>
  );
};

export default ImagesDemo;
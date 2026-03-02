import React from 'react';

// ButtonsLinksDemo compares proper use of <button> and <a> elements.  It
// illustrates disabled states and icon buttons with accessible names.

const ButtonsLinksDemo: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked');
  };
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Choosing the correct element
        for actions and navigation. Use <code>&lt;button&gt;</code> for actions
        that change state on the page and <code>&lt;a&gt;</code> for navigation.
        Disabled buttons should use the <code>disabled</code> attribute, and
        icon buttons must provide an accessible name via <code>aria-label</code>.
      </p>
      <ul>
        <li>Tab through the controls and observe the focus order and keyboard support.</li>
        <li>Notice how disabled and aria-disabled patterns behave differently.</li>
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <button type="button" onClick={handleClick}>Action button</button>
        <a href="#top" role="link">Link to top of page</a>
        <button type="button" disabled>
          Disabled button
        </button>
        {/* aria-disabled allows element to be focusable but non‑interactive */}
        <button type="button" aria-disabled="true" onClick={(e) => e.preventDefault()}>
          Aria‑disabled button
        </button>
        {/* Icon button with accessible name */}
        <button type="button" aria-label="Star button" onClick={handleClick}>
          <span aria-hidden="true" role="img">★</span>
        </button>
      </div>
    </div>
  );
};

export default ButtonsLinksDemo;
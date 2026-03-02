import React from 'react';

// TestingChecklist provides a manual testing checklist to help assess the
// accessibility of a webpage. These steps are generic and not tool‑specific.

const TestingChecklist: React.FC = () => {
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> A simple checklist for manual
        accessibility testing. Following these steps helps ensure that
        components are usable by keyboard and screen reader users and meet
        contrast and motion guidelines.
      </p>
      <h3>Keyboard only</h3>
      <ul>
        <li>Press Tab to move forward and Shift+Tab to move backward through focusable elements.</li>
        <li>
          Ensure all interactive elements are reachable and have a visible focus
          indicator.
        </li>
        <li>Use Enter or Space to activate buttons, links and form controls.</li>
        <li>Check that Escape closes modals and menus where appropriate.</li>
      </ul>
      <h3>Screen reader</h3>
      <ul>
        <li>Ensure headings outline the page structure without skipping levels.</li>
        <li>Use shortcuts to navigate by landmarks, headings, lists and tables.</li>
        <li>
          Verify that alternative text for images, video captions and transcripts convey
          equivalent information.
        </li>
        <li>
          Check that dynamic content changes (e.g. form errors, notifications) are
          announced via aria‑live regions.
        </li>
      </ul>
      <h3>Contrast</h3>
      <ul>
        <li>Ensure text has a contrast ratio of at least 4.5:1 (AA) or 3:1 for large text.</li>
        <li>
          Icons and non‑text elements that convey information must also meet contrast
          requirements or include alternative indicators.
        </li>
        <li>Test both the default and high contrast themes.</li>
      </ul>
      <h3>Reduced motion</h3>
      <ul>
        <li>Enable your operating system’s reduce motion setting or toggle the reduced motion button.</li>
        <li>Verify that animations and transitions are disabled or greatly reduced.</li>
      </ul>
    </div>
  );
};

export default TestingChecklist;
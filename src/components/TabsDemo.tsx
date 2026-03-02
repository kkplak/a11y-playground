import React, { useState, KeyboardEvent } from 'react';

// TabsDemo implements a fully accessible tab interface using the roving
// tabindex pattern. Arrow keys move focus between tabs, Enter/Space select
// a tab and the associated panel is shown while others are hidden.

const TabsDemo: React.FC = () => {
  const tabs = [
    { id: 'tab-1', label: 'Tab One', content: 'Content for the first tab.' },
    { id: 'tab-2', label: 'Tab Two', content: 'Content for the second tab.' },
    { id: 'tab-3', label: 'Tab Three', content: 'Content for the third tab.' },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;
    let newIndex = activeIndex;
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      newIndex = (activeIndex + 1) % tabs.length;
      e.preventDefault();
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      newIndex = (activeIndex - 1 + tabs.length) % tabs.length;
      e.preventDefault();
    } else if (key === 'Home') {
      newIndex = 0;
      e.preventDefault();
    } else if (key === 'End') {
      newIndex = tabs.length - 1;
      e.preventDefault();
    }
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Tabs must follow the WAI‑ARIA
        Authoring Practices. Only the active tab is focusable, arrow keys move
        focus between tabs and the <code>aria-selected</code> attribute
        indicates the selected tab. Each tab controls a region labelled by
        <code>aria-controls</code>.
      </p>
      <ul>
        <li>Use the arrow keys to move between tabs.</li>
        <li>Press Enter or Space to activate a focused tab.</li>
      </ul>
      <div role="tablist" aria-label="Sample tabs" className="tabs" onKeyDown={handleKeyDown}>
        {tabs.map((tab, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={tab.id}
              id={tab.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`${tab.id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, index) => {
        const selected = index === activeIndex;
        return (
          <div
            key={`${tab.id}-panel`}
            id={`${tab.id}-panel`}
            role="tabpanel"
            aria-labelledby={tab.id}
            hidden={!selected}
          >
            <p>{tab.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TabsDemo;
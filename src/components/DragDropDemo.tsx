import React, { useState } from 'react';

// DragDropDemo provides a keyboard‑friendly alternative to drag‑and‑drop
// reordering.  Each list item includes move up/down buttons to change
// position.  Screen reader users can easily reorder items without having
// to perform complex gestures.

const DragDropDemo: React.FC = () => {
  const [items, setItems] = useState<string[]>([
    'First task',
    'Second task',
    'Third task',
    'Fourth task',
  ]);

  const moveUp = (index: number) => {
    if (index === 0) return;
    setItems((prev) => {
      const newItems = [...prev];
      [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
      return newItems;
    });
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1) return;
    setItems((prev) => {
      const newItems = [...prev];
      [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
      return newItems;
    });
  };

  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Drag‑and‑drop interfaces should
        offer alternative keyboard controls. Use buttons to reorder list items
        without requiring a pointing device.
      </p>
      <ul>
        <li>Use the Move up/down buttons to change the order of the tasks.</li>
        <li>Tab to each button; keyboard focus remains visible.</li>
      </ul>
      <ol>
        {items.map((item, index) => (
          <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>{item}</span>
            <button
              type="button"
              onClick={() => moveUp(index)}
              disabled={index === 0}
              aria-label={`Move ${item} up`}
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() => moveDown(index)}
              disabled={index === items.length - 1}
              aria-label={`Move ${item} down`}
            >
              ↓
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DragDropDemo;
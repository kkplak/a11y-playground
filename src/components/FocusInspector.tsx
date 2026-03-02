import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAnnouncer } from '../context/AnnouncementContext';

interface FocusInfo {
  role: string;
  name: string;
}

// FocusInspector displays details about the currently focused element and logs
// announcements triggered by components. It listens globally for focus events
// and computes an accessible name based on ARIA attributes or text content.
const FocusInspector: React.FC = () => {
  const { theme, textSize, reducedMotion } = useTheme();
  const { announcements } = useAnnouncer();
  const [focusInfo, setFocusInfo] = useState<FocusInfo>({ role: 'none', name: '' });

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      // Determine role: prefer explicit ARIA role, otherwise use tag name.
      const role = target.getAttribute('role') || target.tagName.toLowerCase();

      // Compute accessible name: aria-label > aria-labelledby > alt > text content.
      let name = '';
      if (target.getAttribute('aria-label')) {
        name = target.getAttribute('aria-label') || '';
      } else if (target.getAttribute('aria-labelledby')) {
        const ids = target.getAttribute('aria-labelledby')?.split(/\s+/) || [];
        name = ids
          .map((id) => {
            const el = document.getElementById(id);
            return el?.textContent?.trim() || '';
          })
          .join(' ');
      } else if ((target as HTMLImageElement).alt) {
        name = (target as HTMLImageElement).alt;
      } else {
        name = target.textContent?.trim() || '';
      }
      setFocusInfo({ role, name });
    };
    window.addEventListener('focusin', handleFocus);
    return () => window.removeEventListener('focusin', handleFocus);
  }, []);

  return (
    <aside className="inspector" aria-label="Accessibility inspector">
      <h2>Inspector</h2>
      <div>
        <strong>Focused element</strong>
        <div>
          Role: <code>{focusInfo.role || 'none'}</code>
        </div>
        <div>
          Name: <code>{focusInfo.name || 'none'}</code>
        </div>
      </div>
      <hr />
      <div>
        <strong>Theme settings</strong>
        <div>Theme: {theme}</div>
        <div>Text size: {textSize}</div>
        <div>Reduced motion: {reducedMotion ? 'on' : 'off'}</div>
      </div>
      <hr />
      <div>
        <strong>Announcement log</strong>
        {announcements.length === 0 ? (
          <p>No announcements yet.</p>
        ) : (
          <ol>
            {announcements.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ol>
        )}
      </div>
    </aside>
  );
};

export default FocusInspector;
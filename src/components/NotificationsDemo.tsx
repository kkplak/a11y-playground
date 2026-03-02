import React, { useState, useEffect } from 'react';
import { useAnnouncer } from '../context/AnnouncementContext';

// NotificationsDemo demonstrates polite and assertive notifications.  Toasts
// appear in the bottom right and automatically disappear after a few
// seconds. Screen reader announcements are sent via the announcement context.

interface Toast {
  id: number;
  message: string;
  type: 'info' | 'alert';
}

const NotificationsDemo: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const { announce } = useAnnouncer();

  const addToast = (message: string, type: 'info' | 'alert') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    announce(message);
  };

  // Remove toasts after 5 seconds
  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 5000)
    );
    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [toasts]);

  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Notifications should be
        announced politely via <code>aria-live="polite"</code> unless they
        require immediate attention, in which case <code>role="alert"</code>
        should be used. Toasts disappear automatically after a short period.
      </p>
      <ul>
        <li>Click the buttons to trigger notifications and listen for the announcements.</li>
      </ul>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button type="button" onClick={() => addToast('Information saved', 'info')}>
          Show notification
        </button>
        <button type="button" onClick={() => addToast('Critical error occurred', 'alert')}>
          Show alert
        </button>
      </div>
      {/* Toast container with polite live region */}
      <div className="toast-container" aria-live="polite" aria-atomic="false">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast ${toast.type === 'alert' ? 'alert' : ''}`}
            role={toast.type === 'alert' ? 'alert' : 'status'}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsDemo;
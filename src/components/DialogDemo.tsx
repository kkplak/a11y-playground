import React, { useState, useRef, useEffect } from 'react';

// DialogDemo presents an accessible modal dialog.  Focus is trapped within
// the modal while it is open, Escape closes it and focus is returned to
// the trigger button when the dialog is dismissed.

const DialogDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // When dialog opens, move focus to close button
  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    }
  }, [open]);

  // Restore focus to trigger when closing
  const closeDialog = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  // Trap focus within modal
  const trapFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab') return;
    const focusable = (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        (last as HTMLElement).focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        (first as HTMLElement).focus();
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      closeDialog();
    }
    trapFocus(e);
  };

  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Accessible modal dialogs
        implement focus trapping, Escape to close and return focus to the
        trigger. A proper <code>role="dialog"</code> and
        <code>aria-modal="true"</code> communicate the modal nature to
        assistive technologies.
      </p>
      <ul>
        <li>Open the dialog and use Tab/Shift+Tab to cycle through focusable items.</li>
        <li>Press Escape to close the dialog and return focus to the trigger.</li>
      </ul>
      <button type="button" onClick={() => setOpen(true)} ref={triggerRef}>
        Open dialog
      </button>
      {open && (
        <div className="modal-overlay" role="presentation">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            onKeyDown={onKeyDown}
          >
            <h3 id="dialog-title">Example dialog</h3>
            <p>
              This is a simple modal dialog.  Its purpose is to demonstrate how
              focus trapping and Escape handling work.  The rest of the page is
              inert while this dialog is open.
            </p>
            <button type="button" onClick={closeDialog} ref={closeButtonRef}>
              Close dialog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogDemo;
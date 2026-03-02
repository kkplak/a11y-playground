import React, { createContext, useContext, useState, ReactNode } from 'react';

// AnnouncementContext provides a mechanism for components to simulate screen
// reader announcements. When `announce` is called, the message is appended to
// the log which the inspector displays. In a real screen reader, these
// messages would be announced via aria-live regions.

export type AnnouncementContextType = {
  announce: (message: string) => void;
  announcements: string[];
};

const AnnouncementContext = createContext<AnnouncementContextType | undefined>(undefined);

export const AnnouncementProvider = ({ children }: { children: ReactNode }) => {
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const announce = (message: string) => {
    setAnnouncements((prev) => [...prev, message]);
  };
  return (
    <AnnouncementContext.Provider value={{ announce, announcements }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncer = (): AnnouncementContextType => {
  const context = useContext(AnnouncementContext);
  if (!context) {
    throw new Error('useAnnouncer must be used within an AnnouncementProvider');
  }
  return context;
};
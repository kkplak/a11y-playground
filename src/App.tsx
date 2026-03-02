import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AnnouncementProvider } from './context/AnnouncementContext';
import FocusInspector from './components/FocusInspector';
import TypographyDemo from './components/TypographyDemo';
import ImagesDemo from './components/ImagesDemo';
import VideoDemo from './components/VideoDemo';
import AudioDemo from './components/AudioDemo';
import FormsDemo from './components/FormsDemo';
import ButtonsLinksDemo from './components/ButtonsLinksDemo';
import DialogDemo from './components/DialogDemo';
import AccordionDemo from './components/AccordionDemo';
import TablesDemo from './components/TablesDemo';
import NotificationsDemo from './components/NotificationsDemo';
import TabsDemo from './components/TabsDemo';
import CarouselDemo from './components/CarouselDemo';
import DragDropDemo from './components/DragDropDemo';
import LanguageDemo from './components/LanguageDemo';
import TestingChecklist from './components/TestingChecklist';

// Top level component sets up providers and layout.  It includes a navigation
// bar linking to each section, global theme controls and the inspector.

const AppContent: React.FC = () => {
  const { theme, toggleTheme, textSize, toggleTextSize, reducedMotion, toggleReducedMotion } = useTheme();

  // Define sections and their order.  Each item contains an id for anchor
  // navigation, a title and the demo component to render.
  const sections = [
    { id: 'typography', title: 'Typography & content', Component: TypographyDemo },
    { id: 'images', title: 'Images', Component: ImagesDemo },
    { id: 'video', title: 'Video', Component: VideoDemo },
    { id: 'audio', title: 'Audio', Component: AudioDemo },
    { id: 'forms', title: 'Forms', Component: FormsDemo },
    { id: 'buttons-links', title: 'Buttons & Links', Component: ButtonsLinksDemo },
    { id: 'dialog', title: 'Dialogs', Component: DialogDemo },
    { id: 'accordion', title: 'Accordion & Disclosure', Component: AccordionDemo },
    { id: 'tables', title: 'Tables', Component: TablesDemo },
    { id: 'notifications', title: 'Notifications', Component: NotificationsDemo },
    { id: 'tabs', title: 'Tabs', Component: TabsDemo },
    { id: 'carousel', title: 'Carousel', Component: CarouselDemo },
    { id: 'drag', title: 'Drag & Drop Alternative', Component: DragDropDemo },
    { id: 'language', title: 'Language Switch', Component: LanguageDemo },
    { id: 'testing', title: 'Testing Checklist', Component: TestingChecklist },
  ];

  // Update document title based on the current hash.  Defaults to the page title.
  useEffect(() => {
    const updateTitle = () => {
      const hash = window.location.hash.replace('#', '');
      const found = sections.find((sec) => sec.id === hash);
      if (found) {
        document.title = `Accessibility Playground – ${found.title}`;
      } else {
        document.title = 'Accessibility Playground';
      }
    };
    updateTitle();
    window.addEventListener('hashchange', updateTitle);
    return () => window.removeEventListener('hashchange', updateTitle);
  }, [sections]);

  return (
    <div className="layout-grid">
      <header>
        <h1 id="top">Accessibility Playground</h1>
        <nav aria-label="Main navigation">
          <ul>
            {sections.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`} aria-label={title}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}
        >
          <button
            onClick={toggleTheme}
            aria-pressed={theme === 'high-contrast'}
            aria-label="Toggle high contrast mode"
          >
            {theme === 'high-contrast' ? 'Default theme' : 'High contrast'}
          </button>
          <button
            onClick={toggleTextSize}
            aria-pressed={textSize === 'large'}
            aria-label="Toggle large text size"
          >
            {textSize === 'large' ? 'Normal text' : 'Large text'}
          </button>
          <button
            onClick={toggleReducedMotion}
            aria-pressed={reducedMotion}
            aria-label="Toggle reduced motion"
          >
            {reducedMotion ? 'Motion on' : 'Reduced motion'}
          </button>
        </div>
      </header>
      {/* Layout body contains the main content and the inspector side-by-side using a grid. */}
      <div className="layout-body">
        <main id="main-content" tabIndex={-1} aria-labelledby="top">
          {sections.map(({ id, title, Component }) => (
            <section
              id={id}
              key={id}
              style={{ marginTop: '2rem' }}
              aria-labelledby={`${id}-heading`}
            >
              <h2 id={`${id}-heading`}>{title}</h2>
              <Component />
            </section>
          ))}
        </main>
        <FocusInspector />
      </div>
      <footer style={{ marginTop: '4rem' }}>
        <p>
         Thank you for visiting the Accessibility Playground. 
        </p>
      </footer>
    </div>
  );
};

// App wraps the content with ThemeProvider and AnnouncementProvider.  These
// providers must sit outside of FocusInspector so it can access the context.
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AnnouncementProvider>
        <AppContent />
      </AnnouncementProvider>
    </ThemeProvider>
  );
};

export default App;
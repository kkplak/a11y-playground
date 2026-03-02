import React from 'react';

// LanguageDemo shows how to switch languages inline using the lang attribute.
// Screen readers will automatically adjust pronunciation when encountering
// different languages.

const LanguageDemo: React.FC = () => {
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> The <code>lang</code>
        attribute can be used inline to specify the language of a phrase. This
        helps screen readers pronounce words correctly.
      </p>
      <ul>
        <li>Listen to how your screen reader changes pronunciation for the Spanish phrase.</li>
      </ul>
      <p>
        This sentence is written in English.{' '}
        <span lang="es">Hola, ¿cómo estás?</span>{' '}
        Then we return to English.{' '}
        <span lang="fr">Merci beaucoup.</span>{' '}
        Multi‑lingual content can be made accessible with proper language tags.
      </p>
    </div>
  );
};

export default LanguageDemo;
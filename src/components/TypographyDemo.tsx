import React from 'react';

// TypographyDemo showcases basic text semantics such as paragraphs,
// emphasis, blockquotes, code samples and lists.  There is no interactive
// content here, but it demonstrates how proper markup helps assistive
// technologies convey structure and meaning.

const TypographyDemo: React.FC = () => {
  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Proper semantic elements for
        textual content. Using <code>p</code>, <code>strong</code>,
        <code>em</code>, <code>blockquote</code>, <code>code</code> and
        lists conveys meaning to both sighted users and assistive technologies.
      </p>
      <ul>
        <li>Use your screen reader’s heading shortcuts to jump between sections.</li>
        <li>Change the text size in the header to see responsive typography.</li>
      </ul>
      <article>
        <p>
          This is a paragraph with <strong>strongly emphasized</strong> and{' '}
          <em>italicized</em> words. Text should be grouped in paragraphs for
          readability.
        </p>
        <blockquote cite="https://www.w3.org/TR/WCAG21/">
          <p>
            Blockquotes are used to indicate quoted material. The
            <code>cite</code> attribute references the source of the quotation.
          </p>
        </blockquote>
        <p>
          Inline code samples can be denoted with the <code>&lt;code&gt;</code>{' '}
          element, like <code>npm install</code>. Use semantic elements rather
          than styling to indicate code.
        </p>
        <ul>
          <li>Unordered list item one</li>
          <li>Unordered list item two</li>
        </ul>
        <ol>
          <li>Ordered list item one</li>
          <li>Ordered list item two</li>
        </ol>
      </article>
    </div>
  );
};

export default TypographyDemo;